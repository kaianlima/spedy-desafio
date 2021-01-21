import { combineReducers } from "redux";

import DrawerReducer from "./drawer/drawer.reducer";

const rootReducer = combineReducers({ drawer: DrawerReducer });

export default rootReducer;
