const { model } = require("../services/llm");

async function researchAgent(state) {
  const prompt = `
    Research company ${state.company}

    Give:
    - What company does
    - Industry
    - Competitors
    - Business model

    Keep concise.
  `;

  const result = await model.invoke(prompt);

  return {
    ...state,
    research: result.content,
  };
}

module.exports = { researchAgent };