import React from "react"
import styled from "styled-components/native"
import { Icon } from "react-native-elements"
import { MapView } from "expo"

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: steelblue;
  border-radius: 5;
  padding-top: 5;
  padding-left: 5;
  padding-bottom: 5;
  padding-right: 5;
`

const Name = styled.View`
  margin-left: 5;
`

const NameText = styled.Text`
  color: white;
  font-weight: bold;
`
export default function MapDoctorPin({ doctor: { name, location } }) {
  return (
    <MapView.Marker coordinate={location}>
      <Container>
        <Icon name="favorite" color="white" size={14} />
        <Name>
          <NameText>{name}</NameText>
        </Name>
      </Container>
    </MapView.Marker>
  )
}
