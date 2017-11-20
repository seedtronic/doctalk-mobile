import React from "react"
import { View } from "react-native"
import { connect } from "react-redux"
import Expo from "expo"
import styled from "styled-components/native"
import { compose, lifecycle, withProps } from "recompose"
import { Button, Text } from "native-base"
import withNavigate from "../lib/withNavigate"
import {
  reset,
  setCoords,
  setPermissionGranted,
  setPermissionDenied,
  setPermissionGot
} from "../lib/reducers/currentPosition"
import { setRegion } from "../lib/reducers/map"
import Spinner from "./Spinner"
import withIsCurrentRoute from "../lib/withIsCurrentRoute"

const Container = styled.View`
  background-color: #62b1f6;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
`
const Title = styled.Text`
  color: white;
  font-size: 48;
  font-weight: 600;
`

export default compose(
  connect(null, {
    reset,
    setCoords,
    setPermissionGot,
    setPermissionDenied,
    setPermissionGranted,
    setRegion
  }),
  withProps({ routeName: "SplashScreen" }),
  withIsCurrentRoute,
  lifecycle({
    componentWillMount() {
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
    loading: permissionGot ? (permissionGranted ? !coords : false) : true
  })),
  withNavigate
)(Splash)

function Splash({ navigate, loading, permissionGranted }) {
  return (
    <Container>
      <View>
        <Title>Doctalk</Title>
      </View>
      <View>{renderStartButton()}</View>
    </Container>
  )

  function renderStartButton() {
    if (loading) {
      return (
        <Button large style={{ width: 190 }}>
          <View style={{ flexGrow: 1, alignItems: "center" }}>
            <Spinner color="white" size="large" />
          </View>
        </Button>
      )
    } else if (permissionGranted) {
      return (
        <Button large onPress={navigate("AppointmentTypeScreen")}>
          <Text>Iniciar assistente</Text>
        </Button>
      )
    } else {
      return (
        <Button large onPress={navigate("ShareLocationScreen")}>
          <Text>Iniciar assistente</Text>
        </Button>
      )
    }
  }
}

async function checkCurrentLocation(props) {
  props.reset()

  const { status } = await Expo.Permissions.getAsync(Expo.Permissions.LOCATION)
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
