import { createContext, useContext, useReducer } from "react";
import { I18nProvider } from "./assets/i18n";
import {AppContext} from "./components/Context"

export const StateContext = createContext(AppContext);
//const {state} = useContext(AppContext);

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    <I18nProvider locale ={StateContext.locale} >
      {children}
    </I18nProvider>
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
