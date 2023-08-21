import React from "react";
import NavBar from "../component/navbar";
import AboutUsPage from "../modules/AboutUsPage";
import './MainLayoutPage.scss';

export default function AboutUsLayoutPage() {
    return(
        <div className="MLPC">
            <div className="MLPSC">
                <div className="MLPSCn">
                    <NavBar/>
                </div>
                <div className="MLPSCl">
                    <AboutUsPage />
                </div>
            </div>
        </div>
    );
}