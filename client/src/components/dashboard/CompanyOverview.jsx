function CompanyOverview({ research }) {

    if (!research) return null;

    return (

        <div className="mt-10 bg-zinc-900 rounded-xl border border-zinc-800 p-6">

            <h2 className="text-3xl font-bold">

                {research.company}

            </h2>

            <p className="text-green-400 mt-2">

                {research.industry}

            </p>

            <div className="grid grid-cols-2 gap-5 mt-8">

                <div>

                    <h4 className="text-zinc-400">

                        CEO

                    </h4>

                    <p>{research.ceo}</p>

                </div>

                <div>

                    <h4 className="text-zinc-400">

                        Founded

                    </h4>

                    <p>{research.founded}</p>

                </div>

                <div>

                    <h4 className="text-zinc-400">

                        Headquarters

                    </h4>

                    <p>{research.headquarters}</p>

                </div>

                <div>

                    <h4 className="text-zinc-400">

                        Sector

                    </h4>

                    <p>{research.sector}</p>

                </div>

            </div>

            <div className="mt-8">

                <h3 className="font-semibold mb-2">

                    Business Model

                </h3>

                <p>

                    {research.businessModel}

                </p>

            </div>

            <div className="mt-8">

                <h3 className="font-semibold mb-3">

                    Competitors

                </h3>

                <div className="flex flex-wrap gap-3">

                    {

                        research.competitors.map((item,index)=>(

                            <span

                            key={index}

                            className="px-4 py-2 bg-zinc-800 rounded-full"

                            >

                                {item}

                            </span>

                        ))

                    }

                </div>

            </div>

        </div>

    )

}

export default CompanyOverview;