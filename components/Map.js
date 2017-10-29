import React from "react"
import { graphql } from "react-apollo"
import { MapView } from "expo"
import { compose, lifecycle, withProps, withState } from "recompose"
import MapDoctorPin from "./MapDoctorPin"
import doctorsQuery from "../graphql/doctorsQuery"

export default compose(
  withState("location", "setLocation", { latitude: 0, longitude: 0 }),
  lifecycle({
    componentWillMount() {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) =>
          this.props.setLocation({ latitude, longitude })
      )
    }
  }),
  graphql(doctorsQuery),
  withProps(({ data: { doctors: { edges } } }) => {
    return {
      doctors: (edges || []).map(({ node }) => node)
    }
  })
)(Map)

function Map({ location, doctors }) {
  return (
    <MapView
      provider={MapView.PROVIDER_GOOGLE}
      style={{ flex: 1, flexGrow: 1 }}
      showsUserLocation={true}
      region={{
        latitude: 0,
        longitude: 0,
        ...location,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    >
      {doctors.map(doctor => <MapDoctorPin key={doctor.id} doctor={doctor} />)}
    </MapView>
  )
}
