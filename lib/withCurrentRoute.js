import { withNavigation } from "react-navigation"
import { compose, withProps } from "recompose"

export default compose(
  withNavigation,
  withProps(({ navigation: { state } }) => ({
    currentRoute: getCurrentRoute(state),
    currentRoutePath: getCurrentRoutePath(state)
  }))
)

function getCurrentRoute(state) {
  const findCurrentRoute = navigationState => {
    if (navigationState.index !== undefined) {
      return findCurrentRoute(navigationState.routes[navigationState.index])
    }
    return navigationState.routeName
  }
  return findCurrentRoute(state)
}

function getCurrentRoutePath(state, path = []) {
  const findCurrentRoute = (navigationState, path) => {
    if (navigationState.index === undefined) {
      return [...path, navigationState.routeName]
    } else {
      return findCurrentRoute(navigationState.routes[navigationState.index], [
        ...path,
        navigationState.routeName
      ])
    }
  }
  return findCurrentRoute(state, path)
}
