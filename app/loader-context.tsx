"use client";

import React from "react";

type LoaderContextProps = {
  hasPreloaded: boolean;
  setHasPreloaded: (value: boolean) => void;
};

const LoaderContext = React.createContext<LoaderContextProps>({
  hasPreloaded: false,
  setHasPreloaded: () => {},
});

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [hasPreloaded, setHasPreloaded] = React.useState(false);

  return (
    <LoaderContext.Provider value={{ hasPreloaded, setHasPreloaded }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const context = React.useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
}