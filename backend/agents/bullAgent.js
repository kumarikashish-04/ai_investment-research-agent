const { model } = require("../services/llm");

async function bullAgent(state) {

    const prompt = `

You are a professional Bull Investor.

Company Research:

${JSON.stringify(state.research)}

Financial Analysis:

${JSON.stringify(state.financial)}

Market Sentiment:

${JSON.stringify(state.sentiment)}

Give ONLY JSON.

{

"title":"Bull Case",

"points":[

"",

"",

""

],

"conclusion":""

}

`;

    const result = await model.invoke(prompt);

    let bull;

    try {

        bull = JSON.parse(

            result.content

                .replace(/```json/g, "")

                .replace(/```/g, "")

                .trim()

        );

    }

    catch {

        bull = {

            title: "Bull Case",

            points: [],

            conclusion: ""

        };

    }

    return {

        ...state,

        bull

    };

}

module.exports = { bullAgent };