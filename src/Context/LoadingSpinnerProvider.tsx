"use client";
import { ReactNode, createContext, useContext, useState } from "react";

export const LoadingContext = createContext({
  loading: false,
  setLoading: (n: boolean) => {},
});

export const useLoading = () => useContext(LoadingContext);
export const LoadingSpinnerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
