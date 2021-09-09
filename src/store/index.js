import {combineReducers, createStore} from "redux";
import {gameReducer} from "./gameReducer";

const rootReducer = combineReducers({
  game: gameReducer,
})

export const store = createStore(rootReducer)