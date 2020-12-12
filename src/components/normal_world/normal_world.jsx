import Carpet from "../carpet/carpet";
import Lamps from "../lamps/lamps";
import "./normal_world.css";


const NormalWord = () => {
    return(
        <div className="NormalWord">
            <div className="Wall">
                <Lamps/>
            </div>
            <div className="Floor">
                <Carpet/>
            </div>
        </div>
    );
};

export default NormalWord;