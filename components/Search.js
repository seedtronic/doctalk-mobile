import React from "react"
import styled from "styled-components/native"
import { List } from "native-base"
import SpecialtiesList from "./SpecialtiesList"
import SpecialtiesListItem from "./SpecialtiesListItem"

const Container = styled.View`
  flex-grow: 1;
  flex-direction: column;
`

export default function Search() {
  return (
    <Container>
      <List style={{ backgroundColor: "white" }}>
        <SpecialtiesListItem
          specialty={{ id: null, title: "Todas as especialidades" }}
        />
      </List>
      <SpecialtiesList />
    </Container>
  )
}
