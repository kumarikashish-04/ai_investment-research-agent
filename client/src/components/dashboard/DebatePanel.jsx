function DebateCard({ title, color, points, conclusion }) {

    return (

        <div className={`rounded-2xl border p-6 ${color}`}>

            <h2 className="text-2xl font-bold mb-5">

                {title}

            </h2>

            <ul className="space-y-3">

                {

                    points?.map((item, index) => (

                        <li key={index}>

                            • {item}

                        </li>

                    ))

                }

            </ul>

            <div className="mt-6 font-semibold">

                {conclusion}

            </div>

        </div>

    );

}

function DebatePanel({ bull, bear }) {

    if (!bull || !bear) return null;

    return (

        <div className="grid lg:grid-cols-2 gap-6 mt-8">

            <DebateCard

                title="🐂 Bull Argument"

                color="border-green-500 bg-green-950/20"

                points={bull.points}

                conclusion={bull.conclusion}

            />

            <DebateCard

                title="🐻 Bear Argument"

                color="border-red-500 bg-red-950/20"

                points={bear.points}

                conclusion={bear.conclusion}

            />

        </div>

    );

}

export default DebatePanel;