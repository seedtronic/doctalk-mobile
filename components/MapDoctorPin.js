import React from "react"
import { connect } from "react-redux"
import { MapView } from "expo"
import { withNavigation } from "react-navigation"
import { compose, withState } from "recompose"
import DoctorMarker from "./DoctorMarker"

export default compose(
  withNavigation,
  withState("pressed", "setPressed", false),
  connect(({ map: { region } }) => ({ region }))
)(MapDoctorPin)

function MapDoctorPin({ navigation, pressed, setPressed, region, doctor }) {
  return (
    <MapView.Marker
      coordinate={{ latitude: doctor.lat, longitude: doctor.lng }}
      onPress={onPress}
    >
      <DoctorMarker doctor={doctor} />
    </MapView.Marker>
  )

  function onPress() {
    if (pressed) {
      return
    }
    setPressed(true)
    navigation.navigate("DoctorScreen", { doctorId: doctor.id })
    setTimeout(() => setPressed(false), 1000)
  }
}
