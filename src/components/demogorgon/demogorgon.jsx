import demogorgonIMG from "./demogorgon.png";
import "./demogorgon.css"
import React from "react";

const Demogorgon = () => {
    return(
        <img src={demogorgonIMG} alt="Demogorgon" className="Demogorgon" />
    );
};

export default React.memo(Demogorgon);