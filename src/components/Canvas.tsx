import React, { useRef, useState, useEffect } from "react";
import { drawCanvas } from "../utils/helpers";
import { getTime, Time } from "../utils/getTime";
import { useConfig } from "./ProductConfig";

interface CanvasProps {}

export const Canvas: React.FC<CanvasProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);

  const [time, setTime] = useState<null | Time>(null);

  const { zoom, colorChoice } = useConfig();

  useEffect(() => {
    setTime(getTime());
    window.setInterval(() => setTime(getTime()), 1000);
    if (canvasRef && canvasRef.current && context && context) {
      const context2d = canvasRef.current.getContext("2d");
      context.current = context2d;
    }
  }, []);

  useEffect(() => {
    if (canvasRef && canvasRef.current && time && context.current) {
      const { width, height } = canvasRef.current;
      context.current.clearRect(0, 0, width, height);
      drawCanvas(context.current, { zoom, colors: colorChoice }, time, width);
    }
  }, [time, zoom, colorChoice]);

  return <canvas ref={canvasRef} width={250} height={250} />;
};

export default Canvas;
