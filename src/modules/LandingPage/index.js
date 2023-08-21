import React from "react";
import "./LandingPage.scss";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="LPMC">
      <div className="LPMCa">
        <div style={{ fontSize: "44px" }}>Welcome!</div>
        <div style={{ fontSize: "54px" }}>
          to <span style={{ fontWeight: "700" }}>QH-Dashboard</span>{" "}
        </div>
        <div className="LPMCac" style={{fontStyle:'italic'}}>
          Unveiling Success: Where Data Meets Achievement !
        </div>
        <div className="LPMCac" style={{paddingTop:'10px'}}>Embark on Your Journey to Success with Our Intuitive Dashboard!<br/> Let's Get Started and Unlock a World of Possibilities.</div>
        <div className="LPMCab" style={{ paddingTop: "22px" }}>
        
        <br/>
          <Link to="/home" className="LMPCaa">
            Get Started
          </Link>{" "}
        </div>
      </div>
      <div className="LPMCb">
        <div style={{borderRadius:'5px'}}>
        <img
          src="https://raw.githubusercontent.com/raviprakash11/qh-dashboard/bin/dashboard-main.jpg"
          alt="brand-logo"
            style={{width:'50vw', height:'auto', borderRadius:'5px'}}
        />
        </div>
      </div>
    </div>
  );
}
