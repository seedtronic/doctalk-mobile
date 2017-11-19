import React from "react"
import { connect } from "react-redux"
import { MapView } from "expo"
import { compose } from "recompose"
import DoctorMarker from "./DoctorMarker"
import withNavigate from "../lib/withNavigate"

export default compose(
  withNavigate,
  connect(({ map: { region } }) => ({ region }))
)(MapDoctorPin)

function MapDoctorPin({ navigate, pressed, region, doctor }) {
  return (
    <MapView.Marker
      coordinate={{ latitude: doctor.lat, longitude: doctor.lng }}
      onPress={navigate("DoctorScreen", { doctorId: doctor.id })}
    >
      <DoctorMarker doctor={doctor} pressed={pressed} />
    </MapView.Marker>
  )
}
