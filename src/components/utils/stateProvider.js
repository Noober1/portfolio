import { createContext, useContext } from 'react';

const AppContext = createContext();

export function ContextProvider({ themeSwitcher, children }) {
  const sharedState = {
    themeSwitcher: themeSwitcher
  }
  
   return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
    return useContext(AppContext);
}