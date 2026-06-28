const yahooFinance = require("yahoo-finance2").default;

async function getCompanyData(symbol) {
    try {

        const quote = await yahooFinance.quote(symbol);

        const summary = await yahooFinance.quoteSummary(symbol, {
            modules: [
                "financialData",
                "summaryProfile",
                "defaultKeyStatistics"
            ]
        });

        return {

            companyName: quote.longName,

            symbol: quote.symbol,

            currentPrice: quote.regularMarketPrice,

            marketCap: quote.marketCap,

            peRatio: quote.trailingPE,

            sector: summary.summaryProfile?.sector,

            industry: summary.summaryProfile?.industry,

            website: summary.summaryProfile?.website,

            revenueGrowth:
                summary.financialData?.revenueGrowth,

            profitMargins:
                summary.financialData?.profitMargins,

            debtToEquity:
                summary.financialData?.debtToEquity,

            totalCash:
                summary.financialData?.totalCash,

            totalDebt:
                summary.financialData?.totalDebt

        };

    } catch (err) {

        console.log(err);

        return null;

    }
}

module.exports = { getCompanyData };