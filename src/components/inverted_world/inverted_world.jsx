import Door from "../door/door"
import "./inverted_world.css";
import Demogorgon from "../demogorgon/demogorgon"


const InvertedWord = (promps) => {
    const {changeTheWorld} = promps;
    return (
        <div className="InvertedWord">
            <div className="WallInv">
            </div>
            <div className="FloorInv">
            </div>
            <div className="ContainerInv">
                <div className="BoxDoor"> <Door changeTheWorld={changeTheWorld} inverted={true}/> </div>
                <div className="BoxDemogorgon"> <Demogorgon/> </div>
            </div>
        </div>
    );
};

export default InvertedWord;