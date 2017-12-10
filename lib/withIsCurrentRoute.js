import { compose, withProps } from "recompose"
import withIsCurrentRouteGetters from "./withIsCurrentRouteGetters"

export default function withIsCurrentRoute(routeName) {
  return compose(
    withIsCurrentRouteGetters,
    withProps(({ getIsCurrentRoute, getIsCurrentRoutePath }) => ({
      isCurrentRoute: getIsCurrentRoute(routeName),
      isCurrentRoutePath: getIsCurrentRoutePath(routeName)
    }))
  )
}
