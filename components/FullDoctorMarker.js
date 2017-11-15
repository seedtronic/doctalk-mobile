import React from "react"
import styled from "styled-components/native"
import { View } from "react-native"
import { Text } from "native-base"

const Container = styled.View`
  align-items: center;
  background-color: #62b1f6;
  border-radius: 25;
  display: flex;
  flex-direction: row;
  height: 50;
  overflow: hidden;
`
const NameContainer = styled.View`
  margin-left: 5;
  margin-right: 10;
`

const Tip = styled.View`
  width: 20;
  height: 40;
  background-color: #62b1f6;
  margin-left: auto;
  margin-right: auto;
  margin-top: -27;
  align-items: center;
  z-index: -1;
`

const Image = styled.Image`
  width: 50;
  height: 50;
`

export default function FullDoctorMarker({ doctor: { name, imageUrl } }) {
  return (
    <View>
      <Container>
        <View>
          <Image source={{ uri: imageUrl }} />
        </View>
        <NameContainer>
          <Text style={{ color: "white" }}>{name}</Text>
        </NameContainer>
      </Container>
      <Tip style={{ transform: [{ rotate: "45deg" }] }} />
    </View>
  )
}
