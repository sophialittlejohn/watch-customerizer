import React, { useState, useContext } from "react";
import "./ProductConfig.css";
import { ZoomProps, Zoom } from "./Zoom";
import { ColorChoiceContext, ColorChoice } from "./ColorChoice";
import Canvas from "./Canvas";
import { ColorOption, colorOptions } from "../utils/colorOptions";

type IConfigContext = ZoomProps & ColorChoiceContext;

interface CompoundComponent {
  Zoom: React.FC;
  ColorChoice: React.FC;
  Canvas: React.FC;
}

interface ProductConfigProps {}

const ConfigContext = React.createContext<IConfigContext | undefined>(
  undefined
);

export const ProductConfig: React.FC<ProductConfigProps> &
  CompoundComponent = ({ children }) => {
  const [colorChoice, setColorChoice] = useState<ColorOption>(colorOptions[3]);
  const [zoom, setZoom] = useState(0);

  const memoizedContextValue = React.useMemo(
    () => ({
      zoom,
      setZoom,
      colorChoice,
      setColorChoice,
    }),
    [zoom, setZoom, colorChoice, setColorChoice]
  );

  return (
    <ConfigContext.Provider value={memoizedContextValue}>
      <div className="product-container">{children}</div>
    </ConfigContext.Provider>
  );
};

export const useConfig = (): IConfigContext => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("This component must be used within a <Tabs> component.");
  }
  return context;
};

ProductConfig.Zoom = Zoom;
ProductConfig.ColorChoice = ColorChoice;
ProductConfig.Canvas = Canvas;
