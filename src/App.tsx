import React from "react";
import "./App.css";
import { ProductConfig } from "./components/ProductConfig";

function App() {
  return (
    <div className="App">
      <ProductConfig>
        <ProductConfig.Canvas />
        <ProductConfig.ColorChoice />
        <ProductConfig.Zoom />
      </ProductConfig>
    </div>
  );
}

export default App;
