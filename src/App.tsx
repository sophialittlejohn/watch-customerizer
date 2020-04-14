import React from "react";
import "./App.css";
import { ProductConfig, Color, Zoom } from "./components/ProductConfig";
import Canvas from "./components/Canvas";
import { useZoom } from "./hooks/useZoom";
import { useColorChoice } from "./hooks/useColorChoice";

function App() {
  const { zoom, setZoom } = useZoom(0);
  const { colorChoice, setColorChoice } = useColorChoice("");

  return (
    <div className="App">
      <ProductConfig>
        <Canvas colorChoice={colorChoice} zoom={zoom} />
        <Color colorChoice={colorChoice} onChange={setColorChoice} />
        <Zoom zoom={zoom} handleZoom={setZoom} />
      </ProductConfig>
    </div>
  );
}

export default App;
