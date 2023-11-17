import {
  ApiGatewayManagementApiClient,
  PostToConnectionCommand,
} from "@aws-sdk/client-apigatewaymanagementapi";
import { DynamoDBClient, PutItemCommand, GetItemCommand, QueryCommand, ScanCommand } from "@aws-sdk/client-dynamodb";
// import {
//   DynamoDBDocumentClient,
//   ScanCommand,
//   PutCommand,
//   GetCommand,
//   DeleteCommand,
// } from "@aws-sdk/lib-dynamodb";

/*
  Connection URL https://xxxxxxxxxxx/execute-api.us-east-1.amazonaws.com/production/@connections
  ENDPOINT = 'https://xxxxxxxxxxx/execute-api.us-east-1.amazonaws.com/production/'
  https://emvq4hf0je.execute-api.ap-south-1.amazonaws.com/production/@connections
*/

const ENDPOINT = 'https://emvq4hf0je.execute-api.ap-south-1.amazonaws.com/production';

const gatewayClient = new ApiGatewayManagementApiClient({ endpoint: ENDPOINT });
const dynamoClient = new DynamoDBClient({ region: "ap-south-1" });


const sendToOne = async (id, body) => {
  try {
    const requestParams = {
      ConnectionId: id,
      Data: JSON.stringify(body)
    }
    const command = new PostToConnectionCommand(requestParams);
    await gatewayClient.send(command);
  } catch (err) {
    console.error(err);
  }
};

const sendToAll = async (ids, body) => {
  const all = ids.map(i => sendToOne(i, body));
  return Promise.all(all);
};

export const $connect = async () => {
  return {};
};

export const updateConnectionId = async (payload, meta) => {
  // create/update the value in Users table with the new connection id
  console.log("Payload in update : ", payload);
  console.log("meta in update : ", meta);
  const newConnectionIdParams = {
    TableName: "Users",
    Item: {
      email: { S: payload.email },
      username: { S: payload.username },
      status: { S: payload.status },
      bio: { S: payload.bio },
      connectionId: { S: meta.connectionId }
    }
  };
  try {
    await dynamoClient.send(new PutItemCommand(newConnectionIdParams));
    console.log("Item created or updated successfully.");
    await sendToOne(meta.connectionId, { event: "updatedConnectionId" });
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: 'Failed to create or update item: ' + JSON.stringify(err),
    };
  }
  return {};
};


export const sendPrivate = async (payload, meta) => {
  console.log("Payload in sendprivate : ", payload);
  console.log("meta in sendprivate : ", meta);
  let recieverConnectionId = undefined;
  // fetch the current connection id from the Users table
  const queryParams = {
    TableName: "Users",
    Key: {
      email: { S: payload.receiverEmail }
    }
  };
  try {
    const { Item } = await dynamoClient.send(new GetItemCommand(queryParams));
    console.log("------------------RECIEPIENT ITEM------------------", Item)
    recieverConnectionId = Item.connectionId.S;
    console.log("------------------recieverConnectionId------------------", recieverConnectionId)
    console.log("connectionId fetched successfully.");
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: 'Failed to Fetch User connectionId Item Item: ' + JSON.stringify(err),
    };
  }
  // put in database.
  const alphabeticalEmails = [payload.senderEmail, payload.receiverEmail].sort();
  const conversationId = `${alphabeticalEmails[0]}&${alphabeticalEmails[1]}`;
  const timestamp = new Date().toISOString();
  const item = {
    conversationId: { S: conversationId },
    timestamp: { S: timestamp },
    messageText: { S: payload.messageText },
    receiverEmail: { S: payload.receiverEmail },
    receiverUsername: { S: payload.receiverUsername },
    senderEmail: { S: payload.senderEmail },
    senderUsername: { S: payload.senderUsername }
  };
  const newItemparams = {
    TableName: "conversations",
    Item: item
  };
  try {
    await dynamoClient.send(new PutItemCommand(newItemparams));
    console.log("message item created fetched successfully.");
    // return { statusCode: 200, body: 'Item created successfully.' };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: 'Failed to create Message in DynamoDb: ' + JSON.stringify(err) };
  }
  // send the message to connectionId.
  try {
    await sendToAll([recieverConnectionId, meta.connectionId], { event: "newPrivateMessage", message: item });
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: 'Failed to send socket message to reciepent: ' + JSON.stringify(err) };
  }
  return {};
};

export const fetchAllMessages = async (payload, meta) => {
  const alphabeticalEmails = [payload.entity1, payload.entity2].sort();
  const conversationId = `${alphabeticalEmails[0]}&${alphabeticalEmails[1]}`;
  const queryParams = {
    TableName: "conversations",
    KeyConditionExpression: "conversationId = :cid",
    ExpressionAttributeValues: {
      ":cid": { S: conversationId }
    },
    ScanIndexForward: true
  };
  const queryCommand = new QueryCommand(queryParams);
  try {
    const { Items } = await dynamoClient.send(queryCommand);
    console.log("------------ITEMS FETCHED SUCCESFULLY---------", Items);
    // echo the message back to connectionId.
    try {
      await sendToOne(meta.connectionId, { event: "allMessagesResponse", messageList: Items });
    } catch (err) {
      console.error(err);
      return {}
    }
  } catch (error) {
    console.error(error);
    return {};
  }
}

export const fetchAllUsers = async (payload, meta) => {
  const queryParams = {
    TableName: "Users"
  };
  try {
    const data = await dynamoClient.send(new ScanCommand(queryParams));
    console.log("Success", data.Items);
    try {
      await sendToOne(meta.connectionId, { event: "allUsersResponse", usersList: data });
    } catch (err) {
      console.error(err);
      return {}
    }
    return {};
  } catch (err) {
    console.error(err);
    return {};
  }
}

export const $disconnect = async (payload, meta) => {
  return {};
};