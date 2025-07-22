import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { convertToCoreMessages, streamText, Message} from 'ai';
import { initialPrompt } from '@/lib/initialPrompt';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY
})

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const generatedId = () => Math.random().toString(36).slice(2, 15)

const buildAIGenerativePrompt = (messages: Message[]): Message[] => [
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

export async function POST (req: Request) {
  const { messages } = await req.json();
    const result = streamText({
      model: google('gemini-2.0-flash'),
      messages: buildAIGenerativePrompt(messages),
      temperature: 0.7
  });
  return result?.toDataStreamResponse();
}