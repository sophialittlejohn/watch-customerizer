import { useState, useEffect } from "react";

export const useColorChoice = (currentColorChoice: string) => {
  const [colorChoice, setColorChoice] = useState("");

  useEffect(() => {
    setColorChoice(currentColorChoice);
  }, [currentColorChoice]);

  return { colorChoice, setColorChoice };
};
