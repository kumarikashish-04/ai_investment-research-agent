function InfoCard({ title, value }) {
    return (
        <div className="bg-zinc-800 rounded-xl p-5">
            <p className="text-zinc-400 text-sm">{title}</p>

            <h2 className="text-lg font-semibold mt-2">
                {value}
            </h2>
        </div>
    );
}

function FinancialHealth({ financial }) {

    if (!financial) return null;

    return (

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-8">

            <h2 className="text-2xl font-bold mb-8">

                Financial Health

            </h2>

            {/* Financial Strength */}

            <h3 className="text-lg font-semibold mb-4">

                Financial Strength

            </h3>

            <div className="grid md:grid-cols-3 gap-5">

                <InfoCard
                    title="Cash Position"
                    value={financial.financialStrength?.cashPosition}
                />

                <InfoCard
                    title="Debt Level"
                    value={financial.financialStrength?.debtLevel}
                />

                <InfoCard
                    title="Profitability"
                    value={financial.financialStrength?.profitability}
                />

            </div>

            {/* Growth */}

            <h3 className="text-lg font-semibold mt-10 mb-4">

                Growth Potential

            </h3>

            <div className="grid md:grid-cols-2 gap-5">

                <InfoCard
                    title="Revenue Growth"
                    value={financial.growthPotential?.revenueGrowth}
                />

                <InfoCard
                    title="Earnings Growth"
                    value={financial.growthPotential?.earningsGrowth}
                />

            </div>

            {/* Valuation */}

            <h3 className="text-lg font-semibold mt-10 mb-4">

                Valuation

            </h3>

            <div className="grid md:grid-cols-3 gap-5">

                <InfoCard
                    title="PE Ratio"
                    value={financial.valuationAssessment?.peRatio}
                />

                <InfoCard
                    title="Market Cap"
                    value={financial.valuationAssessment?.marketCap}
                />

                <InfoCard
                    title="Verdict"
                    value={financial.valuationAssessment?.verdict}
                />

            </div>

        </div>

    );

}

export default FinancialHealth;