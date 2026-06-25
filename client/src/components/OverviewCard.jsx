function OverviewCard({ data }) {
    return (
      <div className="bg-zinc-900 p-6 rounded-xl mb-6">
  
        <h2 className="text-xl font-bold mb-3">
          Company Research
        </h2>
  
        <p className="whitespace-pre-wrap">
          {data.research}
        </p>
  
      </div>
    );
  }
  
  export default OverviewCard;