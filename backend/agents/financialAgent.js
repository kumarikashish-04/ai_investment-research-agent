const { model } = require("../services/llm");
const { getCompanyData } = require("../services/yahooFinance");

async function financialAgent(state) {
    const prompt = `
Analyze ${state.company}.

Return ONLY valid JSON.

Format:

{
  "financialStrength": {
    "cashPosition": "",
    "debtLevel": "",
    "profitability": ""
  },
  "growthPotential": {
    "revenueGrowth": "",
    "earningsGrowth": ""
  },
  "valuationAssessment": {
    "peRatio": "",
    "marketCap": "",
    "verdict": ""
  }
}

Do not use markdown.
Do not use \`\`\`json.
Return JSON only.
`;
  
const result = await model.invoke(prompt);

let financialAnalysis;

try {
  financialAnalysis = JSON.parse(result.content);
} catch (error) {
  financialAnalysis = {
    error: "Failed to parse financial analysis"
  };
}
  
    return {
      ...state,
      financialAnalysis
    };
  }

module.exports = { financialAgent };