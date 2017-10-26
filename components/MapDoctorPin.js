import React from "react"
import styled from "styled-components/native"
import { Button, Icon, Text } from "native-base"
import { MapView } from "expo"
import { withNavigation } from "react-navigation"
import { compose, withState } from "recompose"

const Tip = styled.View`
  width: 50;
  height: 50;
  background-color: steelblue;
`

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
      <Button small iconLeft info>
        <Icon name="heart" />
        <Text>{pressed ? "loading ..." : name}</Text>
      </Button>
      <Tip style={{ transform: [{ rotate: "45deg" }] }} />
    </MapView.Marker>
  )

  function onPress() {
    setPressed(true)
    setTimeout(function() {
      navigation.navigate("DoctorScreen")
      setPressed(false)
    }, 1000)
  }
}
