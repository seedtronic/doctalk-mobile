import React from "react"
import { branch, compose, renderComponent, withProps } from "recompose"
import { graphql } from "react-apollo"
import { List } from "native-base"
import specialtiesQuery from "../graphql/specialtiesQuery"
import SpecialtiesListItem from "./SpecialtiesListItem"
import SpinnerView from "./SpinnerView"

export default compose(
  graphql(specialtiesQuery),
  branch(({ data }) => data.loading, renderComponent(SpinnerView)),
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
