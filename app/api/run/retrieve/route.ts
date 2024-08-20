import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  const { threadId, runId } = await req.json();

  if (!threadId || !runId) {
    return NextResponse.json(
      { error: "threadId and runId are required", success: false },
      { status: 400 }
    );
  }

  const openai = new OpenAI();
  try {
    const run = await openai.beta.threads.runs.retrieve(threadId, runId);

    console.log("from openai run", run);

    return NextResponse.json({ run, success: true }, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) { // Narrowing error type
    if (error.message.includes('429')) { // 429 is the status code for rate limit exceeded
      console.error('Rate limit exceeded. Please try again later.');
    } else {
      console.error('An error occurred:', error);
    }
    }
    return NextResponse.json(
      { error: "Something went wrong", success: false },
      { status: 500 }
    );
  }
}
