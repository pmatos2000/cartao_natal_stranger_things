import React from "react";
import "./christmas_tree.css";
import christmasTreeSVG from "./christmas_tree.svg";


const ChristmasTree = () => <img src={christmasTreeSVG} alt="Arvore de natal" className="ChristmasTree"/>;

export default React.memo(ChristmasTree);
