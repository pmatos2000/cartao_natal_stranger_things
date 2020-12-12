import React from "react";
import chameleonSVG from "./chameleon.svg";
import "./chameleon.css"

const Chameleon = () => <img src={chameleonSVG} alt="Camaleão" className="Charmelon"/>;

export default React.memo(Chameleon);