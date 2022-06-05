import React, { useContext, useState, createContext } from "react";
import { useHistory } from "react-router-dom";
const GlobalStateContext = createContext({});

export default function GlobalStateProvider({ children }) {
  const history = useHistory();
  const [language, setLanguage] = useState("en");

  return (
    <GlobalStateContext.Provider
      value={{
        language,
        setLanguage,
        history,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState() {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }

  return context;
}
