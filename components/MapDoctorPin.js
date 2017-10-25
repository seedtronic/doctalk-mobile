import React from "react"
import { Button } from "react-native-elements"
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
  doctor: { name, location }
}) {
  return (
    <MapView.Marker coordinate={location} onPress={onPress}>
      <Button
        title={pressed ? "loading ..." : name}
        iconLeft
        icon={{ name: "favorite", color: "white", size: 14 }}
        fontSize={16}
        borderRadius={5}
        buttonStyle={{ height: 32 }}
        backgroundColor="steelblue"
      />
    </MapView.Marker>
  )

  function onPress() {
    setPressed(true)
    setTimeout(function() {
      navigation.navigate("DoctorScreen")
      setPressed(false)
    }, 500)
  }
}
