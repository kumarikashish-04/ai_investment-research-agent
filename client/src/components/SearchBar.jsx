function SearchBar({
    company,
    setCompany,
    handleAnalyze,
  }) {
    return (
      <div className="flex gap-3 mb-8">
  
        <input
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
          placeholder="AAPL"
          className="bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-lg w-full"
        />
  
        <button
          onClick={handleAnalyze}
          className="bg-green-500 px-6 rounded-lg"
        >
          Analyze
        </button>
      </div>
    );
  }
  
  export default SearchBar;