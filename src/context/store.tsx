import * as React from "react";
import { ContextProps } from "./app-store-types-interfaces";
import initialState from "./initial-state";
import mainReducer from "./reducer";

const AppContext = React.createContext({} as ContextProps);

export const useStore = () => React.useContext(AppContext).store;

export const useStoreDispatch = () => React.useContext(AppContext).dispatch;

export const AppProvider: React.FC = ({ children }) => {
	const [store, dispatch] = React.useReducer(mainReducer, initialState);

	return <AppContext.Provider value={{ store, dispatch }}>{children}</AppContext.Provider>;
};
