import { FaChartLine } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-800 bg-zinc-950">

      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <FaChartLine className="text-green-400 text-3xl"/>

          <div>

            <h1 className="text-2xl font-bold text-white">
              AI Investment Terminal
            </h1>

            <p className="text-sm text-zinc-500">
              Multi-Agent Investment Research
            </p>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;