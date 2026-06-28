const { model } = require("../services/llm");

const { getCompanyData } = require("../services/financialService");

const { analyzeFinancials } = require("../services/financialAnalyzer");

async function financialAgent(state){

    const rawData=await getCompanyData(state.company);

    console.log(rawData);

    const financial=analyzeFinancials(rawData);

    const prompt=`

You are a CFA Level III Investment Analyst.

Analyze these financial metrics.

${JSON.stringify(financial,null,2)}

Return ONLY JSON.

{

"summary":"",

"strengths":[

"",

"",

""

],

"weaknesses":[

"",

""

],

"investmentOpinion":"BUY/HOLD/SELL"

}

`;

    const result=await model.invoke(prompt);

    let ai;

    try{

        let text=result.content;

        text=text.substring(

            text.indexOf("{"),

            text.lastIndexOf("}")+1

        );

        ai=JSON.parse(text);

    }

    catch{

        ai={

            summary:"AI parsing failed.",

            strengths:[],

            weaknesses:[],

            investmentOpinion:"HOLD"

        };

    }

    return{

        ...state,

        financial:{

            ...financial,

            ...ai

        }

    };

}

module.exports={financialAgent};