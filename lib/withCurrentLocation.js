import Expo from "expo"
import { compose, lifecycle, withProps } from "recompose"
import {
  reset,
  setCoords,
  setPermissionGranted,
  setPermissionDenied,
  setPermissionGot
} from "../lib/reducers/currentPosition"
import { connect } from "react-redux"
import { setRegion } from "../lib/reducers/map"
import withIsCurrentRoute from "../lib/withIsCurrentRoute"

export default function withCurrentLocation(currentRouteName) {
  return compose(
    connect(null, {
      reset,
      setCoords,
      setPermissionGot,
      setPermissionDenied,
      setPermissionGranted,
      setRegion
    }),
    withIsCurrentRoute(currentRouteName),
    lifecycle({
      componentDidMount() {
        checkCurrentLocation(this.props)
      },
      componentWillReceiveProps(nextProps) {
        if (!this.props.isCurrentRoute && nextProps.isCurrentRoute) {
          checkCurrentLocation(nextProps)
        }
      }
    }),
    connect(
      ({ currentPosition: { coords, permissionGot, permissionGranted } }) => ({
        coords,
        permissionGot,
        permissionGranted
      })
    ),
    withProps(({ coords, permissionGot, permissionGranted }) => ({
      loadingLocation: permissionGot
        ? permissionGranted ? !coords : false
        : true
    }))
  )

  async function checkCurrentLocation(props) {
    props.reset()

    const { status } = await Expo.Permissions.getAsync(
      Expo.Permissions.LOCATION
    )
    const granted = status === "granted"
    const denied = status === "denied"
    props.setPermissionGranted(granted)
    props.setPermissionDenied(denied)
    props.setPermissionGot(true)

    if (granted) {
      const {
        coords: { latitude, longitude }
      } = await Expo.Location.getCurrentPositionAsync()
      props.setCoords({ latitude, longitude })
      props.setRegion({ latitude, longitude })
    }
  }
}
