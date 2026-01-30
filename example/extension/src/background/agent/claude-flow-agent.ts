import { Agent } from "@eko-ai/eko";

export default class ClaudeFlowAgent extends Agent {
  constructor() {
    super({
      name: "ClaudeFlowAgent",
      description:
        "An agent capable of advanced natural language processing using Claude. Specialized in analyzing market trends, synthesizing information from multiple sources, and providing strategic insights using Claude-flow logic.",
      tools: [], // This agent relies on its advanced LLM capabilities
      llms: ["claude"], // Specify that this agent uses the 'claude' LLM config
    });
  }
}
