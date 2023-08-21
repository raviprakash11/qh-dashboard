import React from "react";
import DashboardPage from "../modules/DashboardPage";
import './MainLayoutPage.scss';
import NavBarCI from "../component/navbar/navbarci";

export default function DashboardLayoutPage() {
    return(
        <div className="MLPC">
            <div className="MLPSC">
                <div className="MLPSCn">
                    <NavBarCI/>
                </div>
                <div className="MLPSCl">
                    <DashboardPage />
                </div>
            </div>
        </div>
    );
}