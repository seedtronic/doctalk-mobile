import { NavigationActions } from "react-navigation"
import { RootNavigator } from "../../screens/Navigator"

const { router: { getStateForAction } } = RootNavigator

const initialState = getStateForAction(NavigationActions.init())

export default function(state = initialState, action) {
  return getStateForAction(action, state) || state
}
