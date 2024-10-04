//Reducer principal para armazenar outro reducers dentro dele

import { combineReducers } from "redux"; // Pegar todos os reducers e guarda dentro do root.

import useReducer from "./user/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({useReducer, cartReducer });

export default rootReducer;

// cartReducer está pronto para escutar as actions que serão despachadas