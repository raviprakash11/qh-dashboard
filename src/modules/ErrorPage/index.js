import React from "react";
import { Link } from "react-router-dom";
import './ErrorPage.scss';

export default function ErrorPage() {
    return (
        <div className="EPC">
            <div style={{padding:'10px', textAlign:'center'}}>
                <div style={{fontSize:'34px', fontWeight:'600'}}>Oh no! Something is wrong....</div>
                <div style={{paddingTop:'24px'}}>navigate to the home screen by <Link style={{color:'#000'}} to='/'>clicking</Link> here.</div>
            </div>
        </div>
    );
}