import { Application } from "express";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { postToTag, profileToTag } from "./services/ai.service";
import { config } from "dotenv";

config({ path: ".env.local" });

const candidateDirectory = "src/directory/oldPeopleStore";

export const routes = (app: Application) => {
  app.get("/addPerson", async (req, res) => {
    const { data, email } = req.body;

    const tags = await profileToTag(data as string);
    // data.info ===> tags
    // const tags = `"Investment Strategies", "Stock Market Analysis", "Retirement Planning", "Wealth Management", "Tax Advisory", "Financial Risk Management", "Real Estate Investment"`;
    // const tags = `"Neurosurgery", "Orthopedic Surgery", "Plastic and Reconstructive Surgery", "Bariatric Surgery", "ENT (Ear, Nose, and Throat) Surgery", "Urologic Surgery", "Emergency Surgical Care"`;

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 2000,
      chunkOverlap: 20,
    });

    const previousVectorStore = await HNSWLib.load(
      candidateDirectory,
      new OpenAIEmbeddings({
        openAIApiKey: process.env.OPENAI_API_KEY as string,
        modelName: "text-embedding-ada-002",
      })
    );

    const output = await splitter.createDocuments(
      [tags as string],
      [{ id: email }]
    );

    await previousVectorStore.addDocuments(output);
    await previousVectorStore.save(candidateDirectory);

    // await HNSWLib.fromDocuments()
    // await previousVectorStore.save(candidateDirectory);
    return res.send("Successfully created user Instance");
  });
  app.get("/similarityRecom", async (req, res) => {
    const { text, num } = req.query;
    // const num = `1`;
    // const text =
    //   `Good morning everyone,

    //   I'm working on a machine learning project and I'm facing a doubt. I'm working with RapidMiner on a bank churn dataset and I'm testing different algorithms to see which one is the most accurate in predicting a customer's churn. I'm testing: Decision tree, Gradient Boosted, KnaiveBayes, Neaural Net, Logistic Regression and Random forest. The strange thing, and this is my doubt, is that normalizing the attributes causes me to increase performance also with regard to decided trees, gradient boosted and random forest. Which is strange precisely because this should not affect the performance of this type of algorithm. Can anyone help me by giving me a possible explanation for this? I thank in advance whoever will help me

    //   Have a great day,

    //   Mattia`;
    // if (!text || !num) return res.send("POST Successful");
    // console.log(text);

    //text ==> tags

    const tags = await postToTag(text as string);
    console.log(tags);

    // const tags = `"Stocks", "investment", "banks", "financial", "money", "retirement"`;

    const vectorStore = await HNSWLib.load(
      candidateDirectory,
      new OpenAIEmbeddings({
        openAIApiKey: process.env.OPENAI_API_KEY as string,
        modelName: "text-embedding-ada-002",
      })
    );
    const resultOne = await vectorStore.similaritySearch(
      tags as string,
      parseInt(num as string)
    );
    console.log(resultOne);

    // resultOne[1].metadata.id
    // Add this to post

    res.send(resultOne[0].metadata.id);
  });
};
