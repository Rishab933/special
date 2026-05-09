import React, { createContext, useContext, useState, useRef } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true); // 👈 true = show on first load
  const afterLoadRef = useRef(null);

  // call this instead of navigate() directly
  const triggerLoading = (callback) => {
    callback();
    afterLoadRef.current = ()=>{};
    setLoading(true)
  };

  const stopLoading = () => {
    if (afterLoadRef.current) {
      afterLoadRef.current(); // fire navigate AFTER loading done
      afterLoadRef.current = null;
    }
    setLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ loading, triggerLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);