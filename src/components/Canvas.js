import React, { useRef, useState, useEffect } from "react";
import { drawCanvas } from "../utils/helpers";
import { getTime } from "../utils/getTime";

export const Canvas = (props) => {
  const canvasRef = useRef(null);
  const context = useRef({ current: null });
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(getTime());
    window.setInterval(() => setTime(getTime()), 1000);
    if (canvasRef && canvasRef.current) {
      const context2d = canvasRef.current.getContext("2d");
      context.current = context2d;
    }
  }, []);

  useEffect(() => {
    if (canvasRef && canvasRef.current && time && context.current) {
      const { width, height } = canvasRef.current;
      context.current.clearRect(0, 0, width, height);
      drawCanvas(context.current, props, time, width);
    }
  }, [time, props]);

  return <canvas ref={canvasRef} width={250} height={250} />;
};

export default Canvas;
