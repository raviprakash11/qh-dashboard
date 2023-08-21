import React from "react";
import NavBar from "../component/navbar";
import './MainLayoutPage.scss';
import ErrorPage from "../modules/ErrorPage";

export default function ErrorLayoutPage() {
    return(
        <div className="MLPC">
            <div className="MLPSC">
                <div className="MLPSCn">
                    <NavBar heading1={"My Portfolio"} endpoint={"/"} isContact/>
                </div>
                <div className="MLPSCl">
                    <ErrorPage />
                </div>
            </div>
        </div>
    );
}