import React from "react"
import { View } from "react-native"
import styled from "styled-components/native"
import { Button } from "react-native-elements"
import Map from "../components/Map"

const StatusBarFiller = styled.View`
  background-color: skyblue;
  height: 15;
`

const Header = styled.View`
  align-items: center;
  background-color: skyblue;
  height: 80;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
`

const Title = styled.View`
  align-items: center;
  flex-grow: 1;
`

const Search = styled.View`
  align-items: center;
  width: 150;
`

const TitleText = styled.Text`
  font-family: Helvetica;
  font-size: 50px;
  font-weight: 600;
  color: white;
`

const MapContainer = styled.View`
  flex-grow: 1;
  height: 100%;
  width: 100%;
`

export default function() {
  return (
    <View>
      <StatusBarFiller />
      <Header>
        <Title>
          <TitleText>Doctalk</TitleText>
        </Title>
        <Search>
          <Button
            title="Buscar"
            iconLeft
            icon={{ name: "search", color: "white" }}
          />
        </Search>
      </Header>
      <MapContainer>
        <Map />
      </MapContainer>
    </View>
  )
}
