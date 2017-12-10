import React from "react"
import styled from "styled-components/native"
import { Text } from "native-base"
import ProfileImage from "./ProfileImage"

const Container = styled.View`
  flex-direction: row;
`
const ImageContainer = styled.View`
  margin-top: -6;
  height: 20;
  margin-right: 10;
`
export default function ListItemProfile({ subject: { name, photoUrl } }) {
  return (
    <Container>
      <ImageContainer>
        <ProfileImage photoUrl={photoUrl} size={30} />
      </ImageContainer>
      <Text>{name}</Text>
    </Container>
  )
}
