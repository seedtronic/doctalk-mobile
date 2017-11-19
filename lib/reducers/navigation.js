import find from "lodash/find"
import { NavigationActions } from "react-navigation"
import { RootNavigator } from "../../screens/Navigator"
import { composeResetReducer } from "redux-reset-store"
import cloneDeep from "lodash/cloneDeep"

export const SET_ROUTE_INDEX = "navigation/SET_ROUTE_INDEX"

const { router: { getStateForAction } } = RootNavigator

const initialState = getStateForAction(NavigationActions.init())

export default composeResetReducer(function(state = initialState, action) {
  switch (action.type) {
    case SET_ROUTE_INDEX:
      const { routeName, index } = action.data
      const stateClone = cloneDeep(state)
      const route = findRoute(routeName, stateClone)
      route.index = index
      return stateClone
  }

  return getStateForAction(action, state) || state
}, initialState)

export function setRouteIndex(routeName, index) {
  return {
    type: SET_ROUTE_INDEX,
    data: { routeName, index }
  }
}

function findRoute(routeName, state) {
  const route = find(state.routes, { routeName })
  if (route) {
    return route
  } else {
    return find(state.routes, route => findRoute(routeName, route))
  }
}
