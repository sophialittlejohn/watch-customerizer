import React, { useState } from "react";
import "./ProductConfig.css";
import { Canvas } from "./Canvas";

interface ColorProps {
  colorChoice: string | null;
  onChange: (e: any) => void;
}

interface ZoomProps {
  zoom: number;
  handleZoom: (e: any) => void;
}

interface SliderProps {
  value: number;
  max: number;
  min: number;
  step: number;
  onChange: (e: any) => void;
}

export const Color: React.FC<ColorProps> = () => {
  return null;
};

export const Zoom: React.FC<ZoomProps> = ({ zoom, handleZoom }) => {
  return (
    <div className="zoom">
      <label>
        {zoom > 1.25
          ? "Zoom-out to get the bigger picture."
          : "Zoom-in for a more detailed view."}
      </label>
      <Slider value={zoom} min={1} max={1.5} step={0.1} onChange={handleZoom} />
    </div>
  );
};

const Slider: React.FC<SliderProps> = ({ min, max, step, onChange, value }) => {
  return (
    <div className="slidecontainer">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        className="slider"
        // id="myRange"
        onChange={(e: any) => {
          console.log("enf", e.currentTarget.value);
          onChange(e.currentTarget.value);
        }}
      />
    </div>
  );
};

export const ProductConfig: React.FC = ({ children }) => {
  const [colorChoice, setColorChoice] = useState(null);
  const [zoom, setZoom] = useState(0);
  console.log("> : ProductConfig -> zoom", zoom);

  return <div className="product-container">{children}</div>;
};
