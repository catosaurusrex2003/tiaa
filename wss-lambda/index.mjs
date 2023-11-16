import { $connect, $disconnect, updateConnectionId, fetchAllMessages, fetchAllUsers, sendPrivate } from './actions.mjs';

export const handler = async (event, context) => {

  if (!event.requestContext) {
    console.log("------------------NO REQUEST CONTEXT------------------");
    return {};
  }

  try {

    const connectionId = event.requestContext.connectionId;
    const routeKey = event.requestContext.routeKey;
    const body = JSON.parse(event.body || '{}');

    console.log("------------------connectionId------------------", connectionId);
    console.log("------------------BODY------------------", body);


    switch (routeKey) {
      case "$connect":
        console.log("------------------CONNECTED------------------")
        $connect();
        break;
      case "$disconnect":
        console.log("------------------DISCCONNECTED------------------")
        $disconnect();
        break;
      case "$default":
        console.log("------------------DEFAULT BODY ACTION------------------: ", body.action);
        switch (body.action) {
          case "updateConnectionId":
            console.log("------------------updateConnectionId------------------")
            await updateConnectionId(body, { connectionId });
            break;
          case "sendPrivate":
            console.log("------------------sendPrivate------------------")
            await sendPrivate(body, { connectionId });
            break;
          case "fetchAllMessages":
            console.log("------------------fetchAllMessages------------------")
            await fetchAllMessages(body, { connectionId });
            break;
          case "fetchAllUsers":
            console.log("------------------fetchAllusers------------------")
            await fetchAllUsers(body, { connectionId });
            break;
          default:
            console.log("------------------NO CASE PICKED UP 1------------------")
            break;
        }
      default:
        console.log("------------------NO CASE PICKED UP 2------------------")
        break;
    }
  } catch (err) {
    console.error(err);
  }
  return {};
};