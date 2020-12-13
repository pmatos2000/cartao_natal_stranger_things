import { useState } from 'react';
import './App.css';
import NormalWord from "./components/normal_world/normal_world"
import InvertedWord from "./components/inverted_world/inverted_world";

function App() {

  const [inverted, setinverted] = useState(false);

  const changeTheWorld = () => {
    setinverted(!inverted);
  };

  return (
    <div className="App">
      { inverted ? <InvertedWord changeTheWorld={changeTheWorld} /> : <NormalWord changeTheWorld={changeTheWorld} /> }
    </div>
  );
}

export default App;
