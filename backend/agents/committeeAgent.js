const { model } = require("../services/llm");

async function committeeAgent(state) {

    const prompt = `

You are the Chief Investment Officer.

Research:

${JSON.stringify(state.research)}

Financial:

${JSON.stringify(state.financial)}

Sentiment:

${JSON.stringify(state.sentiment)}

Risk:

${JSON.stringify(state.risks)}

Bull Case:

${JSON.stringify(state.bull)}

Bear Case:

${JSON.stringify(state.bear)}

Return ONLY JSON.
The "risk" field must be a simple string summarizing overall investment risk. Do not return a nested object or array for "risk".

{
    "decision":"BUY",
    "confidence":88,
    "risk":"Medium",
    "reason":"Short explanation",
    "timeHorizon":"Long Term"
}

`;

    const result = await model.invoke(prompt);

    let verdict;

    try {

        verdict = JSON.parse(
            result.content
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim()
        );

    } catch {

        verdict = {
            decision: "HOLD",
            confidence: 50,
            risk: "Medium",
            reason: "Unable to generate recommendation.",
            timeHorizon: "Unknown"
        };

    }

    return {

        ...state,

        verdict

    };

}

module.exports = { committeeAgent };