function VerdictCard({ verdict }) {

    if (!verdict) return null;

    const color =

        verdict.decision === "BUY"

            ? "text-green-400"

            : verdict.decision === "SELL"

                ? "text-red-400"

                : "text-yellow-400";

    const riskText = (() => {
        if (verdict.risk == null) return "Unknown";
        if (typeof verdict.risk === "object") {
            if (Array.isArray(verdict.risk)) {
                return verdict.risk.join(", ");
            }
            return Object.entries(verdict.risk)
                .map(([key, value]) => `${key}: ${value}`)
                .join("; ");
        }
        return verdict.risk;
    })();

    return (

        <div className="mt-10 bg-zinc-900 rounded-2xl border border-zinc-800 p-8">

            <h2 className="text-3xl font-bold mb-8">

                AI Investment Committee

            </h2>

            <div className="grid md:grid-cols-2 gap-8">

                <div>

                    <p className="text-zinc-500">

                        Recommendation

                    </p>

                    <h1 className={`text-5xl font-black mt-2 ${color}`}>

                        {verdict.decision}

                    </h1>

                </div>

                <div>

                    <p className="text-zinc-500">

                        Confidence

                    </p>

                    <h2 className="text-4xl font-bold">

                        {verdict.confidence}%

                    </h2>

                </div>

                <div>

                    <p className="text-zinc-500">

                        Risk

                    </p>

                    <h2 className="text-3xl font-bold">

                        {riskText}

                    </h2>

                </div>

                <div>

                    <p className="text-zinc-500">

                        Time Horizon

                    </p>

                    <h2 className="text-3xl font-bold">

                        {verdict.timeHorizon}

                    </h2>

                </div>

            </div>

            <div className="mt-8">

                <p className="text-zinc-400">

                    {verdict.reason}

                </p>

            </div>

        </div>

    );

}

export default VerdictCard;