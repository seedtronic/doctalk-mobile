import React from "react"
import { View } from "react-native"
import styled from "styled-components/native"
import { compose } from "recompose"
import { Button, Text } from "native-base"
import withNavigate from "../lib/withNavigate"

const Container = styled.View`
  background-color: #62b1f6;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
`
const Question = styled.Text`
  color: white;
  font-size: 48;
  font-weight: 600;
`

const ButtonsContainer = styled.View`
  align-items: center;
`
const AppointmentTypeButton = styled(Button)`
  justify-content: center;
  margin-bottom: 20;
  width: 150;
`

export default compose(withNavigate)(AppointmentType)

function AppointmentType({ navigate }) {
  return (
    <Container>
      <View>
        <Question>O que você deseja marcar?</Question>
      </View>
      <ButtonsContainer>
        <AppointmentTypeButton large onPress={navigate("MainNavigator")}>
          <Text>Consulta</Text>
        </AppointmentTypeButton>
        <AppointmentTypeButton large onPress={navigate("ClinicsNavigator")}>
          <Text>Exame</Text>
        </AppointmentTypeButton>
      </ButtonsContainer>
    </Container>
  )
}
