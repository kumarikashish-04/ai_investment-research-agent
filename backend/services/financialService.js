const axios = require("axios");

const API_KEY = process.env.FINNHUB_API_KEY;
const BASE_URL = "https://finnhub.io/api/v1";

async function getCompanyData(symbol) {
  try {
    const [quoteRes, profileRes, metricRes] = await Promise.all([
      axios.get(`${BASE_URL}/quote`, {
        params: {
            symbol: symbol.toUpperCase(),
          token: API_KEY,
        },
      }),

      axios.get(`${BASE_URL}/stock/profile2`, {
        params: {
            symbol: symbol.toUpperCase(),
          token: API_KEY,
        },
      }),

      axios.get(`${BASE_URL}/stock/metric`, {
        params: {
        symbol: symbol.toUpperCase(),
          metric: "all",
          token: API_KEY,
        },
      }),
    ]);

    const quote = quoteRes.data;

    const profile = profileRes.data;
    const metric = metricRes.data.metric;

    console.log("Quote API:", quote);
    console.log("Profile API:", profile);
    console.log("Metric API:", metric);
    return {
      companyName: profile.name,
      symbol,
      currentPrice: quote.c,
      marketCap: profile.marketCapitalization,
      sector: profile.finnhubIndustry,
      industry: profile.finnhubIndustry,
      website: profile.weburl,
      ceo: "N/A",
      image: profile.logo,

      peRatio: metric.peTTM || null,
      currentRatio: metric.currentRatioQuarterly || null,
      grossMargin: metric.grossMarginTTM || null,
      netMargin: metric.netMarginTTM || null,
      roe: metric.roeTTM || null,

      revenue: metric.revenuePerShareTTM || null,
      netIncome: null,
      eps: metric.epsTTM || null,
    };
  } catch (err) {
    console.log(err.response?.data || err.message);
    return null;
  }
}

module.exports = { getCompanyData };