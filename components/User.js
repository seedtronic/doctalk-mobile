import React from "react"
import { View } from "react-native"
import styled from "styled-components/native"
import ClearLocalDataButton from "./ClearLocalDataButton"
import GoogleButton from "./GoogleButton"

const Container = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default function User() {
  return (
    <Container>
      <View>
        <GoogleButton />
      </View>
      <View>
        <ClearLocalDataButton />
      </View>
    </Container>
  )
}
