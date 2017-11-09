import React from "react"
import { compose, withProps } from "recompose"
import { graphql } from "react-apollo"
import { List } from "native-base"
import specialtiesQuery from "../graphql/specialtiesQuery"
import SpecialtiesListItem from "./SpecialtiesListItem"

export default compose(
  graphql(specialtiesQuery),
  withProps(({ data: { specialties } }) => {
    return {
      specialties: (specialties ? specialties.edges : []).map(
        ({ node }) => node
      )
    }
  })
)(SpecialtyListItems)

function SpecialtyListItems({ specialties }) {
  return (
    <List
      style={{ backgroundColor: "white" }}
      dataArray={specialties}
      renderRow={renderRow}
    />
  )
}

function renderRow(specialty) {
  return <SpecialtiesListItem specialty={specialty} />
}
