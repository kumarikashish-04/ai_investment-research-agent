import { useState } from "react";

import SearchBar from "../components/SearchBar";

import OverviewCard from "../components/OverviewCard";

import FinancialCard from "../components/FinancialCard";

import SentimentCard from "../components/SentimentCard";

import DebatePanel from "../components/DebatePanel";

import VerdictCard from "../components/VerdictCard";

import LoadingScreen from "../components/LoadingScreen";

import api from "../services/api";

function Dashboard() {
  const [company, setCompany] = useState("");

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);

    try {
      const response = await api.post("/analyze", {
        company,
      });

      setData(response.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        AI Investment Terminal
      </h1>

      <SearchBar
        company={company}
        setCompany={setCompany}
        handleAnalyze={handleAnalyze}
      />

      {loading && <LoadingScreen />}

      {data && (
        <>
          <OverviewCard data={data} />

          <FinancialCard data={data} />

          <SentimentCard data={data} />

          <DebatePanel data={data} />

          <VerdictCard data={data} />
        </>
      )}
    </div>
  );
}

export default Dashboard;