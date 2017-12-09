import React from "react"
import styled from "styled-components/native"

const Container = styled.View`
  width: 52;
  height: 52;
  background-color: #62b1f6;
  border-radius: 25;
  overflow: hidden;
`

const Image = styled.Image`
  width: 50;
  height: 50;
`

export default function PhotoMarker({ doctor: { name, photoUrl } }) {
  return (
    <Container>
      <Image source={{ uri: photoUrl }} />
    </Container>
  )
}
