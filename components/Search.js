import React from "react"
import { View } from "react-native"
import { List } from "native-base"
import SpecialtiesList from "./SpecialtiesList"
import SpecialtiesListItem from "./SpecialtiesListItem"

export default function Search() {
  return (
    <View>
      <List style={{ backgroundColor: "white" }}>
        <SpecialtiesListItem
          specialty={{ id: null, title: "Todas as especialidades" }}
        />
      </List>
      <SpecialtiesList />
    </View>
  )
}
