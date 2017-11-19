import React from "react"
import { View } from "react-native"
import { connect } from "react-redux"
import Expo from "expo"
import { compose, lifecycle } from "recompose"
import styled from "styled-components/native"
import { Button, Text } from "native-base"
import withNavigate from "../lib/withNavigate"

const Container = styled.View`
  background-color: #62b1f6;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
const Question = styled.Text`
  color: white;
  font-size: 48;
  font-weight: 600;
`

const ButtonContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
`

const DeniedPermissionMessageContainer = styled.View`
  margin-top: 15;
`

const DeniedPermissionMessage = styled.Text`
  color: red;
  font-size: 20;
`

export default compose(
  withNavigate,
  lifecycle({
    componentWillMount() {}
  }),
  connect(({ currentPosition: { permissionDenied } }) => ({
    permissionDenied
  }))
)(ShareLocation)

function ShareLocation({ navigate, permissionDenied }) {
  return (
    <Container>
      <View>
        <Question>Onde você deseja buscar?</Question>
      </View>
      <ButtonContainer>{renderButton()}</ButtonContainer>
    </Container>
  )

  function renderButton() {
    if (permissionDenied) {
      return [
        <View key="1">
          <Button large disabled>
            <Text>Compartilhar localização</Text>
          </Button>
        </View>,
        <DeniedPermissionMessageContainer key="2">
          <DeniedPermissionMessage>
            Você precisa compartilhar a sua localização com este aplicativo
            antes de continuar
          </DeniedPermissionMessage>
        </DeniedPermissionMessageContainer>
      ]
    } else {
      return (
        <Button large onPress={onPress}>
          <Text>Compartilhar localização</Text>
        </Button>
      )
    }
  }

  async function onPress() {
    const { status } = await Expo.Permissions.askAsync(
      Expo.Permissions.LOCATION
    )
    const granted = status === "granted"
    if (granted) {
      navigate("MainNavigator")()
    }
  }
}
