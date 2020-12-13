import Carpet from "../carpet/carpet";
import Chameleon from "../chameleon/chameleon";
import Lamps from "../lamps/lamps";
import WalkerTalker from "../walker_talker/walker_talker";
import ChristmasTree from "../christmas_tree/christmas_tree";
import Door from "../door/door"
import "./normal_world.css";


const NormalWord = (promps) => {
    const {changeTheWorld} = promps;
    return (
        <div className="NormalWord">
            <div className="Wall">
            </div>
            <div className="Floor">
            </div>
            <div className="Container">
                <Lamps />
                <div className="BoxCarpet"> <Carpet /> </div>
                <div className="BoxWalketTalker"> <WalkerTalker /> </div>
                <div className="BoxCharmelon"> <Chameleon /></div>
                <div className="BoxChristmasTree"> <ChristmasTree />  </div>
                <div className="BoxDoor"> <Door changeTheWorld={changeTheWorld} inverted={false}/> </div>
            </div>
        </div>
    );
};

export default NormalWord;