import {
    FaBrain,
    FaChartBar,
    FaNewspaper,
    FaShieldAlt,
    FaBalanceScale
  } from "react-icons/fa";
  
  function Sidebar() {
  
    const agents = [
      { name: "Research", icon: <FaBrain /> },
      { name: "Financial", icon: <FaChartBar /> },
      { name: "News", icon: <FaNewspaper /> },
      { name: "Risk", icon: <FaShieldAlt /> },
      { name: "Committee", icon: <FaBalanceScale /> },
    ];
  
    return (
  
      <div className="bg-zinc-900 h-full rounded-xl p-5">
  
        <h2 className="text-white font-bold mb-6">
  
          AI Agents
  
        </h2>
  
        {
  
          agents.map((agent,index)=>(
  
            <div
  
              key={index}
  
              className="flex items-center justify-between py-4 border-b border-zinc-800"
  
            >
  
              <div className="flex gap-3 items-center">
  
                {agent.icon}
  
                <span>{agent.name}</span>
  
              </div>
  
              <span className="text-green-400">
  
                ●
  
              </span>
  
            </div>
  
          ))
  
        }
  
      </div>
  
    )
  
  }
  
  export default Sidebar;