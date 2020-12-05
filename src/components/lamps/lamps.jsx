import { useState } from "react";
import { SvgLoader, SvgProxy } from "react-svgmt";
import lampImg from "./lamps.svg";
import "./lamps.css"

const idLamp = "ABCDEFGHIJKLMNOPQRSTUVXWYZ".split("");

const Lamps = () => {
    const [state, setState] = useState(0);
    const [sequence, setSequence] = useState([["A"]]);
    const [sequenceID, setSequenceID] = useState(-1);
    const [time, setTime] = useState(1000);

    const proxSequence = () => {
        const newSequence = [];
        const newSequenceID = (sequenceID + 1);
        let newTime = 1000;
        
        switch (newSequenceID) {
            case 0:
                newTime = 1000;
                newSequence.push(
                    ["F"], ["E"], ["L"], ["I"], ["Z"], [""], ["N"], ["A"], ["T"], ["A"], ["L"], [""], idLamp, [""]
                );
                break;
        }
        setState(0);
        setSequence(newSequence);
        setSequenceID(newSequenceID);
        setTime(newTime);
        
    };

    if (sequenceID === -1) {
        proxSequence();
        return(<div></div>);
    }
    
    setTimeout(() => setState((state + 1) % sequence.length), time);
    const idLampOn = sequence[state];
    const idLampOff = idLamp.filter( a => idLampOn.findIndex(b => a === b) === -1);
    console.log(idLamp);
    console.log(idLampOn);
    console.log(idLampOff);

    return (
        <div>
            <SvgLoader path={lampImg}>
                {
                    idLampOn.map(id => (
                        <SvgProxy selector={`#brightnessOfTheLamp_${id}`} opacity="1" />
                    ))
                }
                {
                    idLampOff.map(id => (
                        <SvgProxy selector={`#brightnessOfTheLamp_${id}`} opacity="0" />
                    ))
                }
            </SvgLoader>
        </div>
    );
};

export default Lamps;