import React from "react"
import { Button, Icon, Text } from "native-base"
import { MapView } from "expo"
import { withNavigation } from "react-navigation"
import { compose, withState } from "recompose"

export default compose(
  withNavigation,
  withState("pressed", "setPressed", false)
)(MapDoctorPin)

function MapDoctorPin({
  navigation,
  pressed,
  setPressed,
  doctor: { name, lat, lng }
}) {
  return (
    <MapView.Marker
      coordinate={{ latitude: lat, longitude: lng }}
      onPress={onPress}
      image={require("../assets/google-maps.png")}
    >
      <Button small iconLeft info>
        <Icon name="heart" />
        <Text>{pressed ? "loading ..." : name}</Text>
      </Button>
    </MapView.Marker>
  )

  function onPress() {
    if (pressed) {
      return
    }
    setPressed(true)
    navigation.navigate("DoctorScreen")
    setTimeout(() => setPressed(false), 1000)
  }
}
