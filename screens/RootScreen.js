import React from "react"
import { Container, Root } from "native-base"
import Navigator from "./Navigator"

export default function RootScreen() {
  return (
    <Root>
      <Container>
        <Navigator />
      </Container>
    </Root>
  )
}
