import React, { useState } from "react";
import "./ProductConfig.css";
import { Zoom } from "./Zoom";
import { ColorChoice } from "./ColorChoice";
import { ColorOption } from "../utils/colorOptions";
import { ConfigContext } from "../hooks/useConfig";
import Canvas from "./Canvas";

type CompoundComponent<T> = {
  Zoom: React.FC;
  ColorChoice: React.FC;
  Canvas: React.FC;
} & React.FC<T>;

interface ProductConfigProps {
  colorOptions: ColorOption[];
}

export const ProductConfig: CompoundComponent<ProductConfigProps> = ({
  colorOptions,
  children,
}) => {
  const [colorChoice, setColorChoice] = useState<ColorOption>(colorOptions[3]);
  const [zoom, setZoom] = useState(0);

  const memoizedContextValue = React.useMemo(
    () => ({
      zoom,
      setZoom,
      colorChoice,
      setColorChoice,
      colorOptions,
    }),
    [zoom, setZoom, colorChoice, setColorChoice, colorOptions]
  );

  return (
    <ConfigContext.Provider value={memoizedContextValue}>
      <div className="product-container">{children}</div>
    </ConfigContext.Provider>
  );
};

ProductConfig.Zoom = Zoom;
ProductConfig.ColorChoice = ColorChoice;
ProductConfig.Canvas = Canvas;
