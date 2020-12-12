import Carpet from "../carpet/carpet";
import Lamps from "../lamps/lamps";
import WalkerTalker from "../walker_talker/walker_talker"
import "./normal_world.css";


const NormalWord = () => {
    return(
        <div className="NormalWord">
            <div className="Wall">
            </div>
            <div className="Floor">
            </div>
            <div className="Container">
                <Lamps/>
                <div className="BoxCarpet"> <Carpet /> </div>
                <div className="BoxWalketTalker"> <WalkerTalker/> </div>
                
            </div>
        </div>
    );
};

export default NormalWord;