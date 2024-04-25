import React from "react";
import { createContext, useState } from "react";

const ContextSaveInput = createContext();

function ContextSaveInputValue({ children }) {
  const [globalValue, setGlobalValue] = useState([]);

  return (
    <ContextSaveInput.Provider value={[globalValue, setGlobalValue]}>
      {children}
    </ContextSaveInput.Provider>
  );
}

export { ContextSaveInputValue, ContextSaveInput };
