import React from "react";
import Navigation from "../Routing/Navigation";
import logo from '../../assets/logo (3).png'
import './HeaderTop.css'

const HeaderTop = () => {
    return (
        <div className="HeaderTop">
                <div className="h-box1">
                    <div className="h-wrap">
                        
                        <ul className="h-list">
                            <img className="h-logo" src={logo} alt="Logo" />
                            <Navigation/>
                        </ul>
                    </div>
                    <div className="h-num_wrap">
                        <p className="h-num">+1 893 839-23-64</p>
                    </div>
                </div>
        </div>
    )
}

export default HeaderTop