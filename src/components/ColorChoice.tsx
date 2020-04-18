import React from "react";
import "./ProductConfig.css";
import { colorOptions, ColorOption } from "../utils/colorOptions";
import { useConfig } from "./ProductConfig";

export type ColorChoiceContext = {
  colorChoice: ColorOption;
  setColorChoice: (e: any) => void;
};

export const ColorChoice: React.FC = () => {
  const { colorChoice, setColorChoice } = useConfig();

  return (
    <form>
      <fieldset>
        <legend>Choose your color</legend>
        {colorOptions.slice(5, 10).map((color) => {
          return (
            <React.Fragment key={color.description}>
              <input
                type="radio"
                id={colorChoice.description}
                name={colorChoice.description}
                value={colorChoice.description}
                onChange={() => setColorChoice(color)}
              />
              <label htmlFor={colorChoice.description}>
                {color.description}
              </label>
            </React.Fragment>
          );
        })}
      </fieldset>
    </form>
  );
};
