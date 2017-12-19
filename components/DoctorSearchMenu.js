import React from "react"
import styled from "styled-components/native"
import { Segment } from "native-base"
import DoctorSearchMenuButton from "./DoctorSearchMenuButton"
import SearchButton from "./SearchButton"
import { Foundation, MaterialCommunityIcons } from "@expo/vector-icons"

const Container = styled(Segment)`
  justify-content: space-around;
  margin-left: 10;
  margin-right: 10;
`

const SearchTypeContainer = styled.View`
  flex-direction: row;
  margin-left: 10;
`

export default function DoctorSearchMenu() {
  return (
    <Container>
      <SearchButton />
      <SearchTypeContainer>
        <DoctorSearchMenuButton
          IconComponent={Foundation}
          iconName="list"
          routeName="DoctorSearchByListScreen"
          first
        />
        <DoctorSearchMenuButton
          IconComponent={MaterialCommunityIcons}
          iconName="google-maps"
          routeName="DoctorSearchByMapScreen"
          last
        />
      </SearchTypeContainer>
    </Container>
  )
}
