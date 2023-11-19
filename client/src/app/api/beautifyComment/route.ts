import { StreamingTextResponse, LangChainStream } from "ai";
import { OpenAIChat } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { Message } from "ai";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();
  const comment =
    messages.at(-1)?.role === "user" ? messages.at(-1)?.content : "";
  console.log("comment", comment);
  const { stream, handlers } = LangChainStream();

  const llm = new OpenAIChat({
    streaming: true,
    openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    modelName: "gpt-3.5-turbo",
  });
  const oneInputPrompt = new PromptTemplate({
    inputVariables: ["comment"],
    template: `Following is a comment that you need to clean, structure and re-draft properly. Make sure to include all the details of the original comment and do not alter the essence of the comment. Do not alter any technical jargons or phrases if any. If the comment is in first person, keep it in first person; if it is in third person keep it in third person and so on. Also correct spellings and contextual errors if any. You can also make things into bullet points if required. Use bullet points only if necessary and not otherwise. Not every comment needs bullets. {comment}`,
  });
  const formattedPrompt = await oneInputPrompt.format({
    comment,
  });

  llm.call(formattedPrompt, {}, [handlers]).catch(console.error);
  return new StreamingTextResponse(stream);
}
