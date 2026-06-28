const { StateGraph } = require("@langchain/langgraph");

const { researchAgent } = require("../agents/researchAgent");
const { financialAgent } = require("../agents/financialAgent");
const { sentimentAgent } = require("../agents/sentimentAgent");
const { riskAgent } = require("../agents/riskAgent");
// const { debateAgent } = require("../agents/debateAgent");
const { committeeAgent } = require("../agents/committeeAgent");
const { bullAgent } = require("../agents/bullAgent");
const { bearAgent } = require("../agents/bearAgent");
const graph = new StateGraph({
  channels:{

    company:null,
    
    research:null,
    
    financial:null,
    
    sentiment:null,
    
    risks:null,
    
    bull:null,
    
    bear:null,
    
    verdict:null
    
    }
  });

graph.addNode("researchNode", researchAgent);
graph.addNode("financialNode", financialAgent);
graph.addNode("sentimentNode", sentimentAgent);
graph.addNode("riskNode", riskAgent);

graph.addNode("committeeNode", committeeAgent);
graph.addNode("bullNode", bullAgent);
graph.addNode("bearNode", bearAgent);
graph.setEntryPoint("researchNode");

graph.addEdge("researchNode", "financialNode");
graph.addEdge("financialNode", "sentimentNode");
graph.addEdge("sentimentNode", "riskNode");
graph.addEdge("riskNode", "bullNode");

graph.addEdge("bullNode", "bearNode");

graph.addEdge("bearNode", "committeeNode");
const investmentGraph = graph.compile();

module.exports = { investmentGraph };