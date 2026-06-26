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

  let verdictData;

try{
  verdictData = JSON.parse(result.content);
}catch(err){
  verdictData = {
    verdict:"UNKNOWN",
    confidence:0,
    reason:"Parsing failed"
  };
}
  return {
    ...state,
    verdict: verdictData.verdict,
    confidence: verdictData.confidence,
    reason: verdictData.reason
  };
}

module.exports = { committeeAgent };