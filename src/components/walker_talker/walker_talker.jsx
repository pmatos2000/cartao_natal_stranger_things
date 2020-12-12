import React, {useState } from "react"
import walkerTalkerSvg from "./walker_talker.svg"
import audio1 from "../../resources/audio/should_i_stay_or_should_i_go.ogg";
import audio2 from "../../resources/audio/jingle_bell_rock.ogg";
import "./walker_talker.css"

const audios = [audio1, audio2];

const WalkerTalker = () => {
    const [idAudio, setIdAudio] = useState(0);
    
    const proxAudio = () => {
        setIdAudio((idAudio + 1) % 3);
        console.log("teste");
    }

    const elementAudio = idAudio > 0 ? <audio src={audios[idAudio-1]} autoPlay={true}/> : null;

    return(
        <div>
            <img src={walkerTalkerSvg} onClick={proxAudio} alt="Walker Talker"  className="WalkerTalker"/>
            {elementAudio}
        </div>
    );

/*
   return(
    <div>
        <img src={walkerTalkerSvg} onClick={proxAudio} alt="Walker Talker" className="WalkerTalker"/>
        {
            (idAudio !== 0) ? <audio src={audios[idAudio-1]} autoPlay/> : null
        }
    </div>
   ); */
}

export default React.memo(WalkerTalker);