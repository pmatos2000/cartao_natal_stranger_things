import React from "react";
import doorInvSVG from "./door_inv.svg";
import doorSVG from "./door.svg";
import "./door.css";

const Door = promps => {
    const {inverted, changeTheWorld} = promps;
    const src = inverted ? doorInvSVG : doorSVG;
    return(
        <img src={src} onClick={changeTheWorld} alt="Porta" className="Door"/>
    );
};

export default React.memo(Door);