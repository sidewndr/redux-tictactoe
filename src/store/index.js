import {combineReducers, createStore} from "redux";
import {gameReducer} from "./gameReducer";
import {scoreReducer} from "./scoreReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
  game: gameReducer,
  score: scoreReducer
})

export const store = createStore(rootReducer, composeWithDevTools())