function Progress({ label, value, color }) {

    return (

        <div className="mb-5">

            <div className="flex justify-between mb-2">

                <span>{label}</span>

                <span>{value}%</span>

            </div>

            <div className="bg-zinc-800 h-3 rounded-full">

                <div

                    className={`h-3 rounded-full ${color}`}

                    style={{

                        width: `${value}%`

                    }}

                />

            </div>

        </div>

    );

}

function SentimentPanel({ sentiment }) {

    if (!sentiment) return null;

    return (

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-8">

            <h2 className="text-2xl font-bold mb-6">

                Market Sentiment

            </h2>

            <Progress

                label="Positive"

                value={sentiment.positive}

                color="bg-green-500"

            />

            <Progress

                label="Negative"

                value={sentiment.negative}

                color="bg-red-500"

            />

            <Progress

                label="Neutral"

                value={sentiment.neutral}

                color="bg-yellow-500"

            />

            <div className="mt-6">

                <h3 className="text-xl font-bold">

                    Overall Market

                </h3>

                <p className="text-green-400 mt-2">

                    {sentiment.overall}

                </p>

                <p className="text-zinc-400 mt-4">

                    {sentiment.summary}

                </p>

            </div>

        </div>

    );

}

export default SentimentPanel;