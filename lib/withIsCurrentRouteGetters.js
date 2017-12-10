import { compose, withProps } from "recompose"
import includes from "lodash/includes"
import withCurrentRoute from "./withCurrentRoute"

export default compose(
  withCurrentRoute,
  withProps(({ currentRoutePath }) => ({
    getIsCurrentRoute: routeName =>
      currentRoutePath[currentRoutePath.length - 1] === routeName,
    getIsCurrentRoutePath: routeName => includes(currentRoutePath, routeName)
  }))
)
