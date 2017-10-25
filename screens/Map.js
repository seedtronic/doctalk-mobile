import React from "react"
import styled from "styled-components/native"
import Map from "../components/Map"

const Container = styled.View`
  flex-grow: 1;
  height: 100%;
  width: 100%;
`

export default function() {
  return (
    <Container>
      <Map />
    </Container>
  )
}
