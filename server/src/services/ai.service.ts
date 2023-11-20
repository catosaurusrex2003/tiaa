import { OpenAIChat } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { config } from "dotenv";

config({ path: ".env.local" });

const llm = new OpenAIChat({
  streaming: true,
  openAIApiKey: process.env.OPENAI_API_KEY as string,
  modelName: "gpt-3.5-turbo",
});

export async function postToTag(data: string) {
  console.log("$$$$$", data);

  const oneInputPrompt = new PromptTemplate({
    inputVariables: ["data"],
    template: `For the question
    {data}
    
    I need you to create meaningful tags of people who can answer this question. You answer with just the tags and nothing else, no introduction, explanation nothing. The answer format should be 'Skill 1', 'Skill 2', 'Skill 3' and so on. The organizations involved in the question if any, is also a tag, any schools if involved is also a tag. These tags are essentially for filtering what type of people can answer this question. If the organization is not a major part of the question, dont include it as a tag.
        `,
  });
  const formattedPrompt = await oneInputPrompt.format({
    data,
  });

  const res = await llm.call(formattedPrompt).catch(console.error);
  return res;
}

export async function profileToTag(data: string) {
  console.log("******", data);

  const oneInputPrompt = new PromptTemplate({
    inputVariables: ["data"],
    template: `
    {data}

    I need you to create meaningful tags from a person's profile. You answer with just the tags and nothing else, no introduction, explanation nothing. The answer format should be "Skill 1", "Skill 2", "Skill 3" and so on. The organizations they have worked in is also a tag, the schools they went to is also a tag and their major/minor is also a tag. These tags are essentially based on the type of questions that person can answer. If the organization has not been a major part of their journey dont include it as a tag.
        `,
  });
  const formattedPrompt = await oneInputPrompt.format({
    data,
  });

  const res = await llm.call(formattedPrompt).catch(console.error);
  return res;
}
