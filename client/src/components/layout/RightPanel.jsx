function RightPanel(){

    return(

        <div className="bg-zinc-900 rounded-xl p-5">

            <h2 className="font-bold text-white mb-6">

                Analysis Progress

            </h2>

            <div className="space-y-5">

                <div>

                    <p>Research</p>

                    <div className="h-2 bg-zinc-800 rounded">

                        <div className="h-2 bg-green-500 w-full rounded"></div>

                    </div>

                </div>

                <div>

                    <p>Financial</p>

                    <div className="h-2 bg-zinc-800 rounded">

                        <div className="h-2 bg-green-500 w-3/4 rounded"></div>

                    </div>

                </div>

                <div>

                    <p>Sentiment</p>

                    <div className="h-2 bg-zinc-800 rounded">

                        <div className="h-2 bg-yellow-500 w-1/2 rounded"></div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default RightPanel;