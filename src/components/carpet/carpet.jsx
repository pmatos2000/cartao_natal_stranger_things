import React from "react"
import carpetSvg from "./carpet.svg"
import "./carpet.css"

const Carpet = () => {
   return(
        <img src={carpetSvg} className="Carpet" alt="Carpet" />
   );
}

export default Carpet;