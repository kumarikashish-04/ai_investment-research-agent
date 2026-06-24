const { model } = require("../services/llm");

async function committeeAgent(state) {
  const prompt = `
    Based on:

    Research:
    ${state.research}

    Financial:
    ${state.financial}

    Sentiment:
    ${state.sentiment}

    Risks:
    ${state.risks}

    Debate:
    ${state.debate}

    Return:

    Verdict: INVEST or PASS

    Confidence: %

    Reason:
  `;

  const result = await model.invoke(prompt);

  return {
    ...state,
    verdict: result.content,
  };
}

module.exports = { committeeAgent };