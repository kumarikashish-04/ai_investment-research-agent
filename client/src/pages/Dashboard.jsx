import { useState } from "react";
import CompanySnapshot from "../components/dashboard/CompanySnapshot";
import api from "../services/api";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LoadingOverlay from "../components/common/LoadingOverlay";
import SearchBar from "../components/common/SearchBar";
import CompanyOverview from "../components/dashboard/CompanyOverview";
function Dashboard(){

    const [company,setCompany]=useState("");

    const [data, setData] = useState(null);

    const handleAnalyze = async () => {

      try{
  
          setLoading(true);
  
          const response = await api.post("/analyze",{
              company
          });
  
          setData(response.data);
  
      }
  
      catch(error){
  
          console.log(error);
  
      }
  
      finally{
  
          setLoading(false);
  
      }
  
  }
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
  
          </div>
  
          <Footer />
  
      </div>
  );

}

export default Dashboard;