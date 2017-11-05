import { combineReducers } from "redux"
import { compose } from "recompose"
import Reactotron from "reactotron-react-native"
import reducers from "./reducers"

export default Reactotron.createStore(combineReducers(reducers), {}, compose())
