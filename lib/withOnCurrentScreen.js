import { compose, lifecycle } from "recompose"
import withCurrentRoute from "./withCurrentRoute"

export default function withOnCurrentScreen(screenName, callback) {
  return compose(
    withCurrentRoute,
    lifecycle({
      componentDidMount() {
        callback(this.props)
      },
      componentWillReceiveProps(nextProps) {
        if (
          nextProps.currentRoute === screenName &&
          nextProps.currentRoute !== this.props.currentRoute
        ) {
          callback(nextProps)
        }
      }
    })
  )
}
