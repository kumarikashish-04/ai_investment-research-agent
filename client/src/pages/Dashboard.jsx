import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LoadingOverlay from "../components/common/LoadingOverlay";
import SearchBar from "../components/common/SearchBar";

function Dashboard(){

    const [company,setCompany]=useState("");

    const handleAnalyze=async()=>{

      setLoading(true);
  
      setTimeout(()=>{
  
          setLoading(false);
  
      },3000);
  
  }
    const [loading,setLoading]=useState(false);

    return(

        <div className="min-h-screen bg-zinc-950">

            <Navbar/>

            <div className="max-w-7xl mx-auto px-8">

                <SearchBar

                company={company}

                setCompany={setCompany}

                handleAnalyze={handleAnalyze}

                />

            </div>
            {
    loading &&

    <LoadingOverlay/>
}

            <Footer/>

        </div>

    )

}

export default Dashboard;