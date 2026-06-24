const { StateGraph } = require("@langchain/langgraph");

const { researchAgent } = require("../agents/researchAgent");
const { financialAgent } = require("../agents/financialAgent");
const { sentimentAgent } = require("../agents/sentimentAgent");
const { riskAgent } = require("../agents/riskAgent");
const { debateAgent } = require("../agents/debateAgent");
const { committeeAgent } = require("../agents/committeeAgent");

const graph = new StateGraph({
  channels: {
    company: null,
    research: null,
    financial: null,
    sentiment: null,
    risks: null,
    debate: null,
    verdict: null,
  },
});

graph.addNode("researchNode", researchAgent);
graph.addNode("financialNode", financialAgent);
graph.addNode("sentimentNode", sentimentAgent);
graph.addNode("riskNode", riskAgent);
graph.addNode("debateNode", debateAgent);
graph.addNode("committeeNode", committeeAgent);

graph.setEntryPoint("researchNode");

graph.addEdge("researchNode", "financialNode");
graph.addEdge("financialNode", "sentimentNode");
graph.addEdge("sentimentNode", "riskNode");
graph.addEdge("riskNode", "debateNode");
graph.addEdge("debateNode", "committeeNode");

const investmentGraph = graph.compile();

module.exports = { investmentGraph };