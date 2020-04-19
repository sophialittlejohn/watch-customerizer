import React, { useContext } from "react";
import { ZoomProps } from "../components/Zoom";
import { ColorChoiceProps } from "../components/ColorChoice";
import { ColorOption } from "../utils/colorOptions";

interface ColorOptions {
  colorOptions: ColorOption[];
}

type ConfigContext = ZoomProps & ColorChoiceProps & ColorOptions;

export const ConfigContext = React.createContext<ConfigContext | undefined>(
  undefined
);

export const useConfig = (): ConfigContext => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("This component must be used within a <Tabs> component.");
  }
  return context;
};
