const { model } = require("../services/llm");
const { getCompanyNews } = require("../services/newsService");

async function sentimentAgent(state) {
  const news = await getCompanyNews(state.company);

  const prompt = `
Analyze these news headlines.

${JSON.stringify(news)}

Return:

Positive %
Negative %
Neutral %

Overall market sentiment.
`;

  const result = await model.invoke(prompt);

  return {
    ...state,
    news,
    sentiment: result.content,
  };
}

module.exports = { sentimentAgent };