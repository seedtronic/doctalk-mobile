import React from "react"
import SpecialtiesListItem from "./SpecialtiesListItem"
import withSpecialties from "../lib/withSpecialties"
import SpinnerView from "../components/SpinnerView"
import List from "./List"

export default withSpecialties(SpinnerView)(SpecialtyListItems)

function SpecialtyListItems({ specialties }) {
  return (
    <List
      style={{ backgroundColor: "white" }}
      items={specialties}
      ListItem={SpecialtiesListItem}
    />
  )
}
