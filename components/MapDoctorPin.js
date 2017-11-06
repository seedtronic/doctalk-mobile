import React from "react"
import styled from "styled-components/native"
import { Button, Text } from "native-base"
import { MapView } from "expo"
import { withNavigation } from "react-navigation"
import { compose, withState } from "recompose"

const Image = styled.Image`
  width: 30;
  height: 30;
`

const Tip = styled.View`
  width: 30;
  height: 30;
  background-color: #62b1f6;
  margin-left: auto;
  margin-right: auto;
  margin-top: -20;
  align-items: center;
  z-index: -1;
`

export default compose(
  withNavigation,
  withState("pressed", "setPressed", false)
)(MapDoctorPin)

function MapDoctorPin({
  navigation,
  pressed,
  setPressed,
  doctor: { id, name, lat, lng, imageUrl }
}) {
  return (
    <MapView.Marker
      coordinate={{ latitude: lat, longitude: lng }}
      onPress={onPress}
    >
      <Button small iconLeft info style={{ borderRadius: 0 }}>
        <Image source={{ uri: imageUrl }} />
        <Text>{pressed ? "loading ..." : name}</Text>
      </Button>
      <Tip style={{ transform: [{ rotate: "45deg" }] }} />
    </MapView.Marker>
  )

  function onPress() {
    if (pressed) {
      return
    }
    setPressed(true)
    navigation.navigate("DoctorScreen", { doctorId: id })
    setTimeout(() => setPressed(false), 1000)
  }
}
