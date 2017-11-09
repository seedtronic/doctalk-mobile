import React from "react"
import { View } from "react-native"
import { compose, withProps } from "recompose"
import { graphql } from "react-apollo"
import specialtiesQuery from "../graphql/specialtiesQuery"
import { List } from "native-base"
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
)(SpecialtiesList)

function SpecialtiesList({ specialties, navigation }) {
  return (
    <View>
      <List style={{ backgroundColor: "white" }}>
        <SpecialtiesListItem
          specialty={{ id: null, title: "Todas as especialidades" }}
        />
      </List>
      <List
        style={{ backgroundColor: "white" }}
        dataArray={specialties}
        renderRow={renderRow}
      />
    </View>
  )
}

function renderRow(specialty) {
  return <SpecialtiesListItem specialty={specialty} />
}
