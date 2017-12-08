import React from "react"
import styled from "styled-components/native"
import { H3 } from "native-base"

const Container = styled.View`
  padding-bottom: 5;
  padding-left: 15;
  padding-top: 10;
  margin-bottom: 10;
  margin-top: 10;
  background-color: white;
  border-bottom-color: #c9c9c9;
  border-bottom-width: 1;
`

export default function({ content }) {
  return (
    <Container>
      <H3>{content}</H3>
    </Container>
  )
}
