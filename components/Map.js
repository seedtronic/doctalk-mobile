import React from "react"
import { MapView } from "expo"
import { compose, lifecycle, withState } from "recompose"

export default compose(
  withState("location", "setLocation", null),
  lifecycle({
    componentWillMount() {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) =>
          this.props.setLocation({ latitude, longitude })
      )
    }
  })
)(Map)

function Map({ location }) {
  return (
    <MapView
      provider={MapView.PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      showsUserLocation={true}
      region={{
        latitude: 0,
        longitude: 0,
        ...location,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    />
  )
}
