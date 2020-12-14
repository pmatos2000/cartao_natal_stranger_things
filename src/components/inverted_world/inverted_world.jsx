import Door from "../door/door"
import "./inverted_world.css";
import Demogorgon from "../demogorgon/demogorgon";
import Particles from "../particles/particles"

const InvertedWord = (promps) => {
    const { changeTheWorld } = promps;
    return (
        <div>
            
            <div className="InvertedWord">

                <div className="WallInv">
                </div>
                <div className="FloorInv">
                </div>

                <div className="ContainerInv">
                    <div className="BoxDoor"> <Door changeTheWorld={changeTheWorld} inverted={true} /> </div>
                    <div className="BoxDemogorgon"> <Demogorgon /> </div>
                </div>

            </div>
            <Particles/>
        </div>


    );
};

export default InvertedWord;