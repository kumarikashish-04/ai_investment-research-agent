const { model } = require("../services/llm");

async function bearAgent(state) {

    const prompt = `

You are a Wall Street Short Seller.

Company:

${JSON.stringify(state.research)}

Financial:

${JSON.stringify(state.financial)}

Risks:

${JSON.stringify(state.risks)}

Return ONLY JSON.

{

"title":"Bear Case",

"points":[

"",

"",

""

],

"conclusion":""

}

`;

    const result = await model.invoke(prompt);

    let bear;

    try {

        bear = JSON.parse(

            result.content

                .replace(/```json/g, "")

                .replace(/```/g, "")

                .trim()

        );

    }

    catch {

        bear = {

            title: "Bear Case",

            points: [],

            conclusion: ""

        };

    }

    return {

        ...state,

        bear

    };

}

module.exports = { bearAgent };