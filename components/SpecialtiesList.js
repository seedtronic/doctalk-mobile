import React from "react"
import { compose, withProps } from "recompose"
import { graphql } from "react-apollo"
import specialtiesQuery from "../graphql/specialtiesQuery"
import { List } from "native-base"
import SpecialtyListItem from "./SpecialtyListItem"

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
  return (
    <List
      style={{ backgroundColor: "white" }}
      dataArray={specialties}
      renderRow={renderRow}
    />
  )
}

function renderRow(specialty) {
  return <SpecialtyListItem specialty={specialty} />
}
