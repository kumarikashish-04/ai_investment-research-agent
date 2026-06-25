function SentimentCard({ data }) {
    return (
      <div className="bg-zinc-900 p-6 rounded-xl mb-6">
  
        <h2 className="text-xl font-bold mb-3">
          News Sentiment
        </h2>
  
        <p>{data.sentiment}</p>
  
      </div>
    );
  }
  
  export default SentimentCard;