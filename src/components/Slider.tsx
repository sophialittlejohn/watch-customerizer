import React from "react";
import "./ProductConfig.css";

interface SliderProps {
  value: number;
  max: number;
  min: number;
  step: number;
  onChange: (e: any) => void;
}

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step,
  onChange,
  value,
}) => {
  return (
    <div className="slidecontainer">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        className="slider"
        id="zoomRange"
        onChange={(e: React.ChangeEvent<any>) =>
          onChange(e.currentTarget.value)
        }
      />
    </div>
  );
};
