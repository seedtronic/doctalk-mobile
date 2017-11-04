import React from "react"
import { compose, withProps } from "recompose"
import { graphql } from "react-apollo"
import specialtiesQuery from "../graphql/specialtiesQuery"
import { List, ListItem } from "native-base"
import ButtonSpecialtiesList from "./ButtonSpecialtiesList"

export default compose(
  graphql(specialtiesQuery),
  withProps(({ data: { specialties } }) => {
    return {
      specialties: (specialties ? specialties.edges : []).map(
        ({ node }) => node
      )
    }
  })
)(SpecialtiesList)

function SpecialtiesList({ specialties, navigation }) {
  return <List dataArray={specialties} renderRow={renderRow} />
  function renderRow(specialty) {
    return (
      <ListItem>
        <ButtonSpecialtiesList>{specialty.title}</ButtonSpecialtiesList>
      </ListItem>
    )
  }
}
