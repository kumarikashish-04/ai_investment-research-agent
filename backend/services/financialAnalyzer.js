function money(num){

    if(!num) return "N/A";

    return new Intl.NumberFormat("en",{

        notation:"compact",

        maximumFractionDigits:2

    }).format(num);

}

function analyzeFinancials(data){

    if(!data) return null;

    let score=0;

    if(data.currentRatio>1.5) score+=20;

    if(data.netMargin>0.15) score+=20;

    if(data.roe>0.20) score+=20;

    if(data.peRatio<35) score+=20;

    if(data.revenue>5000000000) score+=20;

    return{

        company:data.companyName,

        symbol:data.symbol,

        currentPrice:`$${data.currentPrice}`,

        marketCap:money(data.marketCap),

        peRatio:data.peRatio.toFixed(2),

        revenue:money(data.revenue),

        netIncome:money(data.netIncome),

        eps:data.eps,

        grossMargin:(data.grossMargin*100).toFixed(1),

        netMargin:(data.netMargin*100).toFixed(1),

        roe:(data.roe*100).toFixed(1),

        currentRatio:data.currentRatio.toFixed(2),

        score

    };

}

module.exports={analyzeFinancials};