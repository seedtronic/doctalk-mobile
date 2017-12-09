import React from "react"
import { branch, compose, renderComponent } from "recompose"
import { View } from "react-native"
import styled from "styled-components/native"
import { H1 } from "native-base"
import SpinnerView from "./SpinnerView"

const Container = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ImageContainer = styled.View`
  margin-bottom: 10;
  margin-top: 20;
  border-radius: 50;
  overflow: hidden;
`

const Image = styled.Image`
  height: 100;
  width: 100;
`

export default compose(
  branch(({ subject }) => !subject, renderComponent(SpinnerView))
)(Profile)

function Profile({ subject: { name, photoUrl } }) {
  return (
    <Container>
      <ImageContainer>
        <Image source={{ uri: photoUrl }} />
      </ImageContainer>
      <View>
        <H1>{name}</H1>
      </View>
    </Container>
  )
}
