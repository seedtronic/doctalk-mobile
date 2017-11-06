import React from "react"
import styled from "styled-components/native"
import { Button, Text } from "native-base"
import { branch, compose, renderNothing, withProps } from "recompose"
import { graphql } from "react-apollo"
import doctorQuery from "../graphql/doctorQuery"

const Container = styled.View`
  flex-direction: column;
  flex-grow: 1;
`

const ImageContainer = styled.View``
const NameContainer = styled.View`
  flex-grow: 1;
  margin-left: 20;
  margin-top: 20;
`
const ButtonContainer = styled.View`
  align-self: center;
  padding-left: 10;
  padding-right: 10;
  margin-bottom: 10;
  width: 100%;
`

const Name = styled.Text`
  font-size: 24;
`
const Image = styled.Image`
  width: 100%;
  height: 200;
`

export default compose(
  graphql(doctorQuery),
  branch(({ data }) => data.loading, renderNothing),
  withProps(({ data: { doctor } }) => ({ doctor }))
)(DoctorProfile)

function DoctorProfile({ doctor: { name, imageUrl } }) {
  return (
    <Container>
      <ImageContainer>
        <Image source={{ uri: imageUrl }} />
      </ImageContainer>
      <NameContainer>
        <Name>{name}</Name>
      </NameContainer>
      <ButtonContainer>
        <Button style={{ width: "100%" }}>
          <Text>Marcar consulta</Text>
        </Button>
      </ButtonContainer>
    </Container>
  )
}
