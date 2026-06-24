const { model } = require("../services/llm");

async function sentimentAgent(state) {
  const prompt = `
    Analyze market sentiment for ${state.company}

    Mention:
    - Positive News
    - Negative News
    - Overall Sentiment
  `;

  const result = await model.invoke(prompt);

  return {
    ...state,
    sentiment: result.content,
  };
}

module.exports = { sentimentAgent };