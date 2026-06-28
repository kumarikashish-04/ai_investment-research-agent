const { model } = require("../services/llm");
const { getCompanyNews } = require("../services/newsService");

async function sentimentAgent(state) {
  const news = await getCompanyNews(state.company);
  const prompt = `
  You are a stock market sentiment analyst.
  
  Analyze these news headlines:
  
  ${news.join("\n")}
  
  Return ONLY JSON.
  
  {
    "positive": 65,
    "negative": 20,
    "neutral": 15,
    "overall": "Bullish",
    "summary": ""
  }
  `;

  const result = await model.invoke(prompt);

  return {

    ...state,

    sentiment: JSON.parse(

      result.content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim()
    )
    

};
}

module.exports = { sentimentAgent };