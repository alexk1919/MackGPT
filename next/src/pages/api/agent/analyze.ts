import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { RequestBody } from "../../../utils/interfaces";
import AgentService from "../../../services/agent-service";
import { serverError } from "../responses";

export const config = {
  runtime: "edge",
};

const handler = async (request: NextRequest) => {
  try {
    const { modelSettings, goal, task } = (await request.json()) as RequestBody;
    if (task === undefined) {
      return;
    }

    const response = await AgentService.analyzeTaskAgent(
      modelSettings,
      goal,
      task
    );
    return NextResponse.json({
      response: response,
    });
  } catch (e) {}

  return serverError();
};

export default handler;
