import React from "react"
import { compose } from "recompose"
import { View } from "react-native"
import styled from "styled-components/native"
import { Button, Text } from "native-base"
import withNavigate from "../lib/withNavigate"
import withCurrentLocation from "../lib/withCurrentLocation"
import Spinner from "./Spinner"

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

export default compose(withCurrentLocation("SplashScreen"), withNavigate)(
  Splash
)

function Splash({ navigate, loadingLocation, permissionGranted }) {
  return (
    <Container>
      <View>
        <Title>Doctalk</Title>
      </View>
      <View>{renderStartButton()}</View>
    </Container>
  )

  function renderStartButton() {
    if (loadingLocation) {
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
