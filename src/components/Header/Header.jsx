import React from "react";
import './Header.css'
import HeaderTop from "../HeaderTop/HeaderTop";
import HeaderBottom from "../HeaderBottom/HeaderBottom";

const Header = () => {
    return (
        <div className="Header">
            <HeaderTop/>
            <HeaderBottom/>
        </div>
    )
}

export default Header