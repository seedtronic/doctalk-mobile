import React from "react"
import { connect } from "react-redux"
import { withNavigation } from "react-navigation"
import { compose } from "recompose"
import { setSpecialtyId } from "../lib/reducers/mapFilter"
import { ListItem, Text } from "native-base"

function SpecialtiesListItem({ specialty, setSpecialtyId, navigation }) {
  return (
    <ListItem onPress={onPress}>
      <Text>{specialty.title}</Text>
    </ListItem>
  )
  function onPress() {
    setSpecialtyId(specialty.id)
    navigation.goBack(null)
  }
}

export default compose(withNavigation, connect(null, { setSpecialtyId }))(
  SpecialtiesListItem
)
