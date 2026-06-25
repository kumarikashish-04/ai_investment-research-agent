const axios = require("axios");

async function getCompanyNews(company) {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${company}&pageSize=5&apiKey=${process.env.NEWS_API_KEY}`
    );

    return response.data.articles.map((article) => ({
      title: article.title,
      description: article.description,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
}

module.exports = { getCompanyNews };