function SearchBar({
    company,
    setCompany,
    handleAnalyze
}){

    return(

        <div className="mt-14 flex justify-center">

            <div className="flex w-full max-w-3xl shadow-xl">

                <input

                    value={company}

                    onChange={(e)=>setCompany(e.target.value)}

                    placeholder="Enter company symbol (AAPL, TSLA, NVDA...)"

                    className="w-full bg-zinc-900 border border-zinc-700 px-5 py-4 rounded-l-xl text-white outline-none"

                />

                <button

                    onClick={handleAnalyze}

                    className="bg-green-500 hover:bg-green-600 px-8 rounded-r-xl font-semibold"

                >

                    Analyze

                </button>

            </div>

        </div>

    )

}

export default SearchBar;