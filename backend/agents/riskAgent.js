const { model } = require("../services/llm");

async function riskAgent(state) {
  const prompt = `
    Identify risks for investing in ${state.company}

    Include:
    - Market Risk
    - Competition Risk
    - Regulatory Risk
    - Execution Risk
  `;

  const result = await model.invoke(prompt);

  return {
    ...state,
    risks: result.content,
  };
}

module.exports = { riskAgent };