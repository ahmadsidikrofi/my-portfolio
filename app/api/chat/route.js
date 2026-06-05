import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { convertToCoreMessages, streamText, Message } from 'ai';
import { portfolioSystemPrompt } from '@/lib/portfolio-data';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY
})

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const generatedId = () => Math.random().toString(36).slice(2, 15)

const buildAIGenerativePrompt = (messages) => [
  {
    id: generatedId(),
    role: 'user',
    content: initialPrompt.content
  },
  ...messages.map((message) => ({
    id: message.id || generatedId(),
    role: message.role,
    content: message.content
  }))
]

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const result = streamText({
      model: google('gemini-2.5-flash'),
      system: portfolioSystemPrompt,
      messages,
      temperature: 0.7
    });

    return result?.toDataStreamResponse({
      getErrorMessage: (error) => {
        if (error && error.message) {
          return error.message;
        }
        return "Terjadi kesalahan pada AI Server.";
      }
    });
  } catch (e) {
    console.error("Error in API route:", e);
    return new Response(JSON.stringify({ error: e.message || "An error occurred" }), { status: 500 });
  }
}