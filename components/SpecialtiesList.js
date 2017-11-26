import React from "react"
import { List } from "native-base"
import SpecialtiesListItem from "./SpecialtiesListItem"
import withSpecialties from "../lib/withSpecialties"

export default withSpecialties(SpecialtyListItems)

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
