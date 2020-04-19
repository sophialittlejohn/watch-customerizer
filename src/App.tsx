import React from "react";
import "./App.css";
import { ProductConfig } from "./components/ProductConfig";
import { colorOptions } from "./utils/colorOptions";

function App() {
  return (
    <div className="App">
      <ProductConfig colorOptions={colorOptions}>
        <ProductConfig.Canvas />
        <ProductConfig.ColorChoice />
        <ProductConfig.Zoom />
      </ProductConfig>
    </div>
  );
}

export default App;
