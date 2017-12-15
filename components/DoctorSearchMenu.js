import React from "react"
import styled from "styled-components/native"
import { Segment } from "native-base"
import DoctorSearchMenuButton from "./DoctorSearchMenuButton"
import SearchButton from "./SearchButton"

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
          label="Lista"
          routeName="DoctorSearchByListScreen"
          first
        />
        <DoctorSearchMenuButton
          label="Mapa"
          routeName="DoctorSearchByMapScreen"
          last
        />
      </SearchTypeContainer>
    </Container>
  )
}
