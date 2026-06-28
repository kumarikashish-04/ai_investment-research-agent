import GlassCard from "../ui/GlassCard";

function FinancialScore({ financial }) {

    if(!financial) return null;

    const score = financial.score || 0;

    return (
        <GlassCard className="mt-8">

            <div className="flex justify-between">

                <div>
                    <h2 className="text-2xl font-bold">
                        Financial Score
                    </h2>

                    <p className="text-zinc-400 mt-2">
                        Based on cash position, debt and profitability
                    </p>
                </div>

                <div className="text-right">

                    <h1 className="text-5xl font-bold text-green-400">
                        {score}
                    </h1>

                    <p className="mt-2 text-green-400">
                        {score >= 70 ? "BUY" : "HOLD"}
                    </p>

                </div>

            </div>


            <div className="mt-8">

                <div className="h-4 rounded-full bg-zinc-800">

                    <div
                        className="h-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-300"
                        style={{
                            width:`${score}%`
                        }}
                    />

                </div>

            </div>

        </GlassCard>
    )
}

export default FinancialScore;