import React from "react"
import { branch, compose, renderNothing } from "recompose"
import styled from "styled-components/native"

const Container = styled.View`
  border-radius: ${({ size }) => size / 2};
  overflow: hidden;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

const Image = styled.Image`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

export default compose(branch(({ photoUrl }) => !photoUrl, renderNothing))(
  ProfileImage
)

function ProfileImage({ photoUrl, size }) {
  return (
    <Container size={size}>
      <Image source={{ uri: photoUrl }} size={size} />
    </Container>
  )
}
