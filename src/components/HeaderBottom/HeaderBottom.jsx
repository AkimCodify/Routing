import React from "react";
import './HeaderBottom.css'

const HeaderBottom = () => {
    return (
        <div className="h-box">
            <div className="h-t_box">
                <h3 className="h-suptitle">Not the event. The life</h3>
                <br />
                <h1 className="h-title">Burning MAN</h1>
            </div>
            <div className="h-btn_wrap">
                <button className="h-btn">Book the tickets</button>
            </div>
        </div>
    )
}

export default HeaderBottom