import { useState } from "react";
import { SvgLoader, SvgProxy } from "react-svgmt";
import lampImg from  "./lamps.svg";
import "./lamp.css"

const Lamp = () => {
    const [ligada, setLigada] = useState(true);
    const [index, setIndex] = useState(0);
    const lampNome = "RWPKD";
    setTimeout(() =>{
        setIndex((index + 1)%5);
        if(index === 4){
            setLigada(!ligada);
        } 
    }, 500);
    return(
        <div>
             <SvgLoader path={lampImg}>
                 <SvgProxy selector={`#brightnessOfTheLamp_${lampNome[index]}`} opacity={(ligada)?"1":"0"}/>
             </SvgLoader>
        </div>
    );
};

export default Lamp;