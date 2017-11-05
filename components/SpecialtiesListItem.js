import React from "react"
import { connect } from "react-redux"
import { withNavigation } from "react-navigation"
import { compose, withProps } from "recompose"
import { setSpecialtyId } from "../lib/reducers/mapFilter"
import { ListItem, Text } from "native-base"

export default compose(
  withNavigation,
  connect(({ mapFilter: { specialtyId } }) => ({ specialtyId }), {
    setSpecialtyId
  }),
  withProps(({ specialty, specialtyId }) => ({
    isSelected: specialty.id === specialtyId
  }))
)(SpecialtiesListItem)

function SpecialtiesListItem({
  specialty,
  isSelected,
  setSpecialtyId,
  navigation
}) {
  return (
    <ListItem onPress={onPress} style={style()}>
      <Text style={{ color: isSelected ? "white" : "black" }}>
        {specialty.title}
      </Text>
    </ListItem>
  )
  function onPress() {
    setSpecialtyId(specialty.id)
    setTimeout(() => navigation.goBack(null), 400)
  }
  function style() {
    if (isSelected) {
      return {
        backgroundColor: "#62b1f6"
      }
    }
  }
}
