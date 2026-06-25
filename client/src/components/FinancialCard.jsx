function FinancialCard({ data }) {
    return (
      <div className="bg-zinc-900 p-6 rounded-xl mb-6">
  
        <h2 className="text-xl font-bold mb-3">
          Financial Analysis
        </h2>
  
        <pre className="whitespace-pre-wrap">
          {JSON.stringify(
            data.financialAnalysis,
            null,
            2
          )}
        </pre>
  
      </div>
    );
  }
  
  export default FinancialCard;