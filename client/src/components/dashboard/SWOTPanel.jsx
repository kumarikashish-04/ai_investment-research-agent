import GlassCard from "../ui/GlassCard";

function SWOTPanel({ financial }) {

    if(!financial) return null;

    return(

        <div className="grid lg:grid-cols-2 gap-6 mt-8">

            <GlassCard>

                <h2 className="text-xl font-bold text-green-400 mb-5">

                    Strengths

                </h2>

                <ul className="space-y-4">

                    {

                        financial.strengths?.map((item,index)=>(

                            <li key={index}>

                                ✅ {item}

                            </li>

                        ))

                    }

                </ul>

            </GlassCard>

            <GlassCard>

                <h2 className="text-xl font-bold text-red-400 mb-5">

                    Weaknesses

                </h2>

                <ul className="space-y-4">

                    {

                        financial.weaknesses?.map((item,index)=>(

                            <li key={index}>

                                ⚠ {item}

                            </li>

                        ))

                    }

                </ul>

            </GlassCard>

        </div>

    )

}

export default SWOTPanel;