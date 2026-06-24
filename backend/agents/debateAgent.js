const { model } = require("../services/llm");

async function debateAgent(state) {
  const prompt = `
    Company: ${state.company}

    Create:

    Bull Case:
    Bear Case:

    Give strong arguments for both.
  `;

  const result = await model.invoke(prompt);

  return {
    ...state,
    debate: result.content,
  };
}

module.exports = { debateAgent };