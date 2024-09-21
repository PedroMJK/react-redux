//Reducer principal para armazenar outro reducers dentro dele

import { combineReducers } from "redux"; // Pegar todos os reducers e  guarda dentro do root.

import useReducer from "./user/reducer";

const rootReducer = combineReducers({useReducer});

export default rootReducer;