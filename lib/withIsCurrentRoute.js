import includes from "lodash/includes"
import { compose, withProps } from "recompose"
import withCurrentRoute from "./withCurrentRoute"

export default compose(
  withCurrentRoute,
  withProps(({ currentRoutePath, routeName }) => ({
    isCurrentRoute: includes(currentRoutePath, routeName)
  }))
)
