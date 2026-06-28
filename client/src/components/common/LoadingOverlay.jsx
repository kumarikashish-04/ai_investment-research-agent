import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaSpinner,
  FaRegCircle,
} from "react-icons/fa";

function LoadingOverlay() {

  const agents = [
    {
      name: "Research Agent",
      status: "completed",
    },
    {
      name: "Financial Agent",
      status: "running",
    },
    {
      name: "News Agent",
      status: "waiting",
    },
    {
      name: "Risk Agent",
      status: "waiting",
    },
    {
      name: "Committee Agent",
      status: "waiting",
    },
  ];

  return (

    <motion.div

      initial={{ opacity: 0 }}

      animate={{ opacity: 1 }}

      className="mt-10 bg-zinc-900 rounded-xl border border-zinc-800 p-6"

    >

      <h2 className="text-xl font-bold mb-6">

        AI Agents Working...

      </h2>

      {

        agents.map((agent,index)=>(

          <div

            key={index}

            className="flex justify-between items-center py-4 border-b border-zinc-800"

          >

            <span>

              {agent.name}

            </span>

            {

              agent.status==="completed" &&

              <FaCheckCircle className="text-green-400"/>

            }

            {

              agent.status==="running" &&

              <FaSpinner className="animate-spin text-yellow-400"/>

            }

            {

              agent.status==="waiting" &&

              <FaSpinner className="animate-spin text-yellow-400"/>

            }

          </div>

        ))

      }

    </motion.div>

  );

}

export default LoadingOverlay;