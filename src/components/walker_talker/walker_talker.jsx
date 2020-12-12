import React from "react"
import walkerTalkerSvg from "./walker_talker.svg"
import "./walker_talker.css"

const WalkerTalker = () => {
   return(
    <img src={walkerTalkerSvg} className="WalkerTalker"></img>
   );
}

export default React.memo(WalkerTalker);