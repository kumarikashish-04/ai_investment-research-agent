import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import SearchBar from "../components/common/SearchBar";

function Dashboard(){

    const [company,setCompany]=useState("");

    const handleAnalyze=()=>{

        console.log(company);

    }

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

            <Footer/>

        </div>

    )

}

export default Dashboard;