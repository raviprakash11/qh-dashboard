import React from "react";
import NavBar from "../component/navbar";
import './MainLayoutPage.scss';
import FAQsPage from "../modules/FAQsPage";

export default function FAQsLayoutPage() {
    return(
        <div className="MLPC">
            <div className="MLPSC">
                <div className="MLPSCn">
                    <NavBar/>
                </div>
                <div className="MLPSCl">
                   <FAQsPage/>
                </div>
            </div>
        </div>
    );
}