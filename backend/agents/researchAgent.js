const { model } = require("../services/llm");

async function researchAgent(state) {

    const prompt = `
You are an investment research analyst.

Research the company "${state.company}".

Return ONLY valid JSON.

{
    "company":"",
    "ticker":"",
    "industry":"",
    "sector":"",
    "headquarters":"",
    "founded":"",
    "ceo":"",
    "businessModel":"",
    "competitors":[]
}

Do not return markdown.

Do not return explanation.

Only JSON.
`;

    const result = await model.invoke(prompt);

    let research;

    try{

        research=JSON.parse(result.content);

    }

    catch(error){

        research={
            error:"Unable to parse research"
        }

    }

    return{

        ...state,

        research

    }

}

module.exports={researchAgent};