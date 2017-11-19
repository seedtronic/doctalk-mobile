import { withNavigation } from "react-navigation"
import { compose, withHandlers } from "recompose"
import withCurrentRoute from "./withCurrentRoute"
import throttle from "lodash/throttle"
import includes from "lodash/includes"

const debouncedNavigate = throttle(
  ({ currentRoutePath, navigation, route, params }) =>
    !includes(currentRoutePath, route) && navigation.navigate(route, params),
  250,
  { leading: true, trailing: false }
)

export default compose(
  withNavigation,
  withCurrentRoute,
  withHandlers({
    navigate: ({ currentRoutePath, navigation }) => (route, params) => () =>
      debouncedNavigate({ currentRoutePath, navigation, route, params }),
    goBack: ({ navigation }) => () => navigation.goBack(null)
  })
)
