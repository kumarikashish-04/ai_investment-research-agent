import GlassCard from "../ui/GlassCard";

function Metric({ title, value }) {
  return (
    <GlassCard>

      <p className="text-zinc-400 text-sm">

        {title}

      </p>

      <h2 className="text-2xl font-bold mt-3">

        {value}

      </h2>

    </GlassCard>
  );
}

function FinancialOverview({ financial }) {

  if (!financial) return null;

  return (

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

      <Metric

        title="Market Cap"

        value={financial.marketCap}

      />

      <Metric

        title="Current Price"

        value={financial.currentPrice}

      />

      <Metric

        title="PE Ratio"

        value={financial.peRatio}

      />

      <Metric

        title="Revenue Growth"

        value={financial.revenueGrowth}

      />

    </div>

  );

}

export default FinancialOverview;