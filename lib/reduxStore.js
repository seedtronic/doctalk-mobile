import { combineReducers, applyMiddleware } from "redux"
import Reactotron from "reactotron-react-native"
import createDebounce from "redux-debounced"
import reducers from "./reducers"

export default Reactotron.createStore(
  combineReducers(reducers),
  {},
  applyMiddleware(createDebounce())
)
