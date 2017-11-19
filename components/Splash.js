import React from "react"
import styled from "styled-components/native"
import { Button, Text } from "native-base"
import withNavigate from "../lib/withNavigate"

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

export default withNavigate(Splash)

function Splash({ navigate }) {
  return (
    <Container>
      <Container>
        <Title>Doctalk</Title>
      </Container>
      <Container>
        <Button large onPress={navigate("MainNavigator")}>
          <Text>Iniciar</Text>
        </Button>
      </Container>
    </Container>
  )
}
