import { FaChartLine } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="h-16 bg-zinc-950 border-b border-zinc-800 flex justify-between items-center px-8">

      <div className="flex items-center gap-3">

        <FaChartLine className="text-green-400 text-2xl" />

        <div>

          <h1 className="text-white font-bold text-xl">
            AI Investment Terminal
          </h1>

          <p className="text-zinc-500 text-sm">
            Multi-Agent Investment Research
          </p>

        </div>

      </div>

      <div className="text-green-400 text-sm">

        ● Online

      </div>

    </nav>
  );
}

export default Navbar;