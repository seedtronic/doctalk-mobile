import React from "react"
import styled from "styled-components/native"
import { Button } from "native-base"

const Container = styled.View`
  flex-direction: column;
  flex-grow: 1;
`

const ImageContainer = styled.View``
const NameContainer = styled.View`
  flex-grow: 1;
  margin-left: 10;
  margin-top: 20;
`
const ButtonContainer = styled.View`
  padding-left: 10;
  padding-right: 10;
  margin-bottom: 10;
`

const Name = styled.Text`
  font-size: 24;
`
const Image = styled.Image`
  width: 100%;
  height: 200;
`
const ButtonText = styled.Text`
  color: white;
  font-size: 24;
`

export default function DoctorProfile({ doctor: { name, imageUrl } }) {
  return (
    <Container>
      <ImageContainer>
        <Image source={{ uri: imageUrl }} />
      </ImageContainer>
      <NameContainer>
        <Name>{name}</Name>
      </NameContainer>
      <ButtonContainer>
        <Button block>
          <ButtonText>Marcar consulta</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  )
}
