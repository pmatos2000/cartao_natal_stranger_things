import React from "react"
import carpetSvg from "./carpet.svg"
import "./carpet.css"
import WalkerTalker from "../walker_talker/walker_talker"

const Carpet = () => {
   return(
    <div>
        <img src={carpetSvg} className="Carpet"/>
        <div className="CarpetContainer">
            <WalkerTalker/>
        </div>
    </div>
   );
}

export default React.memo(Carpet);