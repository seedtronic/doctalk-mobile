import React from "react"
import { connect } from "react-redux"
import { MapView } from "expo"
import { compose, withState } from "recompose"
import DoctorMarker from "./DoctorMarker"
import withNavigate from "../lib/withNavigate"

export default compose(
  withNavigate,
  withState("pressed", "setPressed", false),
  connect(({ map: { region } }) => ({ region }))
)(MapDoctorPin)

function MapDoctorPin({ navigate, pressed, setPressed, region, doctor }) {
  return (
    <MapView.Marker
      coordinate={{ latitude: doctor.lat, longitude: doctor.lng }}
      onPress={onPress}
    >
      <DoctorMarker doctor={doctor} pressed={pressed} />
    </MapView.Marker>
  )

  function onPress() {
    if (pressed) {
      return
    }
    setPressed(true)
    navigate("DoctorScreen", { doctorId: doctor.id })()
    setTimeout(() => setPressed(false), 1000)
  }
}
