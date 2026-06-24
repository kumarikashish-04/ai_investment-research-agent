const { ChatGroq } =require("@langchain/groq");

const model = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  apiKey: process.env.GROQ_API_KEY,
});
module.exports = { model }