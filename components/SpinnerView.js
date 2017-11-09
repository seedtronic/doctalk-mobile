import React from "react"
import Spinner from "./Spinner"
import styled from "styled-components/native"

const Container = styled.View`
  flex-grow: 1;
  justify-content: center;
`

export default function SpinnerView() {
  return (
    <Container>
      <Spinner size="large" />
    </Container>
  )
}
