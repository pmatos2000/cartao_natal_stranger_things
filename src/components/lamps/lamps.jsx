import { useState } from "react";
import { SvgLoader, SvgProxy } from "react-svgmt";
import lampImg from "./lamps.svg";
import "./lamps.css"

const idLamp = "RSTUVXWYZQPONMLKJABCDEFGHI".split("");

const Lamps = () => {
    const [state, setState] = useState(0);
    const [sequence, setSequence] = useState([[""]]);
    const [sequenceID, setSequenceID] = useState(-1);
    const [idsTimeOut,] = useState([]);


    const proxSequence = () => {
        const newSequence = [];
        const newSequenceID = (sequenceID + 1) % 6;

        switch (newSequenceID) {
            case 0:
                newSequence.push(
                    ["F"], ["E"], ["L"], ["I"], ["Z"], [""], ["N"], ["A"], ["T"], ["A"], ["L"], [""], idLamp, [""]
                );
                break;
            case 1:
                newSequence.push(
                    idLamp.filter((_, index) => index % 2 === 0),
                    idLamp.filter((_, index) => index % 2 === 1)
                );
                break;
            case 2:
                newSequence.push(["D"], ["D", "T"], ["D", "T", "I"], ["D", "T", "I"], [""]);
                break;
            case 3:
                newSequence.push([""]);
                idLamp.forEach(id => newSequence.push([id]));
                break;
            case 4:
                newSequence.push(idLamp);
                break;
            case 5:
            default:
                newSequence.push([""]);
                break;
        }
        setState(0);
        setSequenceID(newSequenceID);
        setSequence(newSequence);
    };

    if (sequenceID === -1) {
        proxSequence();
        return (<div>Carregando...</div>);
    }


    const idLampOn = sequence[state % sequence.length];
    const idLampOff = idLamp.filter(a => idLampOn.findIndex(b => a === b) === -1);

    while (idsTimeOut.length > 0) {
        clearTimeout(idsTimeOut.pop());
    }
    const idTimeOut = setTimeout(() => setState((state + 1) % sequence.length), 1000);
    idsTimeOut.push(idTimeOut);

    return (
        <SvgLoader path={lampImg} className="Lamps">
            {
                idLampOn.map(id => (
                    <SvgProxy selector={`#brightnessOfTheLamp_${id}`} opacity="1" key={id} />
                ))
            }
            {
                idLampOff.map(id => (
                    <SvgProxy selector={`#brightnessOfTheLamp_${id}`} opacity="0" key={id} />
                ))
            }
            <SvgProxy selector="#configLamps" onclick={proxSequence} />
        </SvgLoader>
    );
};

export default Lamps;