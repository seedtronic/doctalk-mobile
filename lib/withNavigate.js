import { withNavigation } from "react-navigation"
import { compose, withHandlers } from "recompose"
import withCurrentRoute from "./withCurrentRoute"

export default compose(
  withNavigation,
  withCurrentRoute,
  withHandlers({
    navigate: ({ currentRoute, navigation }) => (route, params) => () => {
      if (route !== currentRoute) {
        navigation.navigate(route, params)
      }
    }
  })
)
