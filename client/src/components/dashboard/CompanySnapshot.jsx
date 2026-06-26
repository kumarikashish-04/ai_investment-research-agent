function CompanySnapshot({ research }) {

    if (!research) return null;

    return (

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg">

            {/* Header */}

            <div className="flex justify-between items-start">

                <div>

                    <h1 className="text-3xl font-bold">

                        {research.company}

                    </h1>

                    <p className="text-green-400 mt-2">

                        {research.industry}

                    </p>

                </div>

                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full">

                    {research.ticker}

                </div>

            </div>

            {/* Divider */}

            <div className="border-t border-zinc-800 my-6"></div>

            {/* Information Grid */}

            <div className="grid grid-cols-2 gap-6">

                <div>

                    <p className="text-zinc-500 text-sm">

                        CEO

                    </p>

                    <p className="mt-1 font-semibold">

                        {research.ceo}

                    </p>

                </div>

                <div>

                    <p className="text-zinc-500 text-sm">

                        Founded

                    </p>

                    <p className="mt-1 font-semibold">

                        {research.founded}

                    </p>

                </div>

                <div>

                    <p className="text-zinc-500 text-sm">

                        Headquarters

                    </p>

                    <p className="mt-1 font-semibold">

                        {research.headquarters}

                    </p>

                </div>

                <div>

                    <p className="text-zinc-500 text-sm">

                        Sector

                    </p>

                    <p className="mt-1 font-semibold">

                        {research.sector}

                    </p>

                </div>

            </div>

            {/* Business Model */}

            <div className="mt-8">

                <h3 className="text-lg font-bold mb-2">

                    Business Model

                </h3>

                <p className="text-zinc-300 leading-7">

                    {research.businessModel}

                </p>

            </div>

            {/* Competitors */}

            <div className="mt-8">

                <h3 className="text-lg font-bold mb-3">

                    Competitors

                </h3>

                <div className="flex flex-wrap gap-3">

                    {

                        research.competitors?.map((item,index)=>(

                            <span

                                key={index}

                                className="bg-zinc-800 px-4 py-2 rounded-full"

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

export default CompanySnapshot;