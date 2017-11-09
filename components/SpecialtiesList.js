import React from "react"
import { View } from "react-native"
import { List } from "native-base"
import SpecialtyListItems from "./SpecialtyListItems"
import SpecialtiesListItem from "./SpecialtiesListItem"

export default function SpecialtiesList() {
  return (
    <View>
      <List style={{ backgroundColor: "white" }}>
        <SpecialtiesListItem
          specialty={{ id: null, title: "Todas as especialidades" }}
        />
      </List>
      <SpecialtyListItems />
    </View>
  )
}
