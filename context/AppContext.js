import { createContext, useContext } from "react";

const AppContext = createContext();

const name = "tim";

const ContextProvider = ({ children }) => {
  return <AppContext.Provider value={{ name }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default ContextProvider;
