import { compose, lifecycle } from "recompose"
import withCurrentRoute from "./withCurrentRoute"

export default function withRefetchOnChangeToCurrentScreen(screenName) {
  return compose(
    withCurrentRoute,
    lifecycle({
      componentWillReceiveProps(nextProps) {
        if (
          nextProps.currentRoute === screenName &&
          nextProps.currentRoute !== this.props.currentRoute
        ) {
          this.props.refetch()
        }
      }
    })
  )
}
