const yahooFinance = require("yahoo-finance2").default;

async function getCompanyData(company) {
    try {
      const quote = await yahooFinance.quote(company);
  
      console.log(quote);
  
      return quote;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

module.exports = { getCompanyData };