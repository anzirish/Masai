import { legacy_createStore } from "redux";
import { counterReducer } from "./reducer";

const store = legacy_createStore(counterReducer);

export {store}
