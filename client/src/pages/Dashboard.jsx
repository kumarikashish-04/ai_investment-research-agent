import { useState } from "react";
import CompanySnapshot from "../components/dashboard/CompanySnapshot";
import api from "../services/api";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LoadingOverlay from "../components/common/LoadingOverlay";
import SearchBar from "../components/common/SearchBar";
// import CompanyOverview from "../components/dashboard/CompanyOverview";
import FinancialHealth from "../components/dashboard/FinancialHealth";
import { useEffect } from "react";
import FinancialOverview from "../components/dashboard/FinancialOverview";
import FinancialScore from "../components/dashboard/FinancialScore";
import SWOTPanel from "../components/dashboard/SWOTPanel";
import SentimentPanel from "../components/dashboard/SentimentPanel";
import DebatePanel from "../components/dashboard/DebatePanel";
import VerdictCard from "../components/dashboard/VerdictCard";
function Dashboard(){

    const [company,setCompany]=useState("");

    const [data, setData] = useState(null);
    useEffect(() => {
      console.log("API Response:", data);
  }, [data]);

  const handleAnalyze = async () => {
    try {
        setLoading(true);

        const response = await api.post("/analyze", {
            company,
        });

        console.log("Response:");
        console.log(JSON.stringify(response.data, null, 2));

        setData(response.data);

    } catch (err) {
        console.error(err);
    } finally {
        setLoading(false);
    }
};
useEffect(() => {
    console.log("Full data:", data);

    if (data) {
        console.log("Research:", data.research);
        console.log("Financial:", data.financial);
    }
}, [data]);
    const [loading,setLoading]=useState(false);

    return (
      <div className="min-h-screen bg-zinc-950">
  
          <Navbar />
  
          <div className="max-w-7xl mx-auto px-8">
  
              <SearchBar
                  company={company}
                  setCompany={setCompany}
                  handleAnalyze={handleAnalyze}
              />
  
              {loading && <LoadingOverlay />}
  
              {
    data &&

    <div className="mt-8">

        <CompanySnapshot research={data.research}/>

    </div>
}
{/* {
    data &&

    <FinancialHealth

        financial={data.financialAnalysis}

    />

} */}
{data && (
    <>
        <FinancialOverview financial={data.financial} />

        <FinancialScore financial={data.financial} />

        <SWOTPanel financial={data.financial} />
    </>
)}
{data && (

<SentimentPanel

    sentiment={data.sentiment}

/>

)}
  {data && (

<DebatePanel

    bull={data.bull}

    bear={data.bear}

/>

)}
{data && (

<VerdictCard

    verdict={data.verdict}

/>

)}
          </div>
  
          <Footer />
  
      </div>
  );

}

export default Dashboard;