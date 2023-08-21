import React, { useRef } from "react";
import NavBar from "../component/navbar";
import LandingPage from "../modules/LandingPage";
import './MainLayoutPage.scss';

export default function MainLayoutPage() {
    const contactRef = useRef(null);
    const navigateContactMe = () => {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="MLPC">
            <div className="MLPSC">
                <div className="MLPSCn">
                    <NavBar heading1={"About Me"} endpoint={"/aboutus"} navigateContactMe={navigateContactMe}/>
                </div>
                <div className="MLPSCl">
                    <LandingPage />
                </div>
            </div>
        </div>
    );
}