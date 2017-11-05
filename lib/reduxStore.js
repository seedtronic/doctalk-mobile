import { createStore, combineReducers } from "redux"
import { compose } from "recompose"
import Reactotron from "../ReactotronConfig"
import reducers from "./reducers"

export default Reactotron.createStore(combineReducers(reducers), {}, compose())
