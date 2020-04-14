import { useState, useEffect } from "react";

export const useZoom = (currentZoom: number) => {
  const [zoom, setZoom] = useState(0);

  useEffect(() => {
    setZoom(currentZoom);
  }, [currentZoom]);

  return { zoom, setZoom };
};
