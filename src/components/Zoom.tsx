import React from "react";
import "./ProductConfig.css";
import { Slider } from "./Slider";
import { useConfig } from "./ProductConfig";

export type ZoomProps = {
  zoom: number;
  setZoom: (e: any) => void;
};

export const Zoom: React.FC = () => {
  const { zoom, setZoom } = useConfig();

  return (
    <div className="zoom">
      <label>
        {zoom > 1.25
          ? "Zoom-out to get the bigger picture."
          : "Zoom-in for a more detailed view."}
      </label>
      <Slider value={zoom} min={1} max={1.5} step={0.1} onChange={setZoom} />
    </div>
  );
};
