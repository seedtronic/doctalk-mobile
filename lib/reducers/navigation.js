import { NavigationActions } from "react-navigation"
import { RootNavigator } from "../../screens/Navigator"
import { composeResetReducer } from "redux-reset-store"

const { router: { getStateForAction } } = RootNavigator

const initialState = getStateForAction(NavigationActions.init())

export default composeResetReducer(function(state = initialState, action) {
  return getStateForAction(action, state) || state
}, initialState)
