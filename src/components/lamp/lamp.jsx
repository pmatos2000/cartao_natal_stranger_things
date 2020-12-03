import { useState } from "react";
import { SvgLoader, SvgProxy } from "react-svgmt";
import lampImg from  "./lamp.svg";

const Lamp = () => {
    const [ligada, setLigada] = useState(true);
    setTimeout(() => setLigada(!ligada), 1000);
    return(
        <div>
             <SvgLoader path={lampImg}>
                 <SvgProxy selector="#brightnessOfTheLamp" opacity={(ligada)?"1":"0"}/>
             </SvgLoader>
        </div>
    );
};

export default Lamp;