import { createContext, useContext } from 'react';

const AppContext = createContext();

const sharedState = {}

export function ContextProvider({ themeSwitcher, themeMode, children }) {  
  sharedState.themeSwitcher = themeSwitcher
  sharedState.themeMode = themeMode
   return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function setAppContext(item, value) {
  sharedState[item] = value
}

export function useAppContext() {
    return useContext(AppContext);
}