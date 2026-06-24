const { model } = require("../services/llm");

async function financialAgent(state) {
  const prompt = `
    Analyze financial strength of ${state.company}

    Give:
    - Revenue Growth
    - Profitability
    - Debt
    - Cash Flow

    Keep concise.
  `;

  const result = await model.invoke(prompt);

  return {
    ...state,
    financial: result.content,
  };
}

module.exports = { financialAgent };