import Door from "../door/door"
import "./inverted_world.css";


const InvertedWord = (promps) => {
    const {changeTheWorld} = promps;
    return (
        <div className="InvertedWord">
            <div className="WallInv">
            </div>
            <div className="FloorInv">
            </div>
            <div className="Container">
                <div className="BoxDoor"> <Door changeTheWorld={changeTheWorld} inverted={true}/> </div>
            </div>
        </div>
    );
};

export default InvertedWord;