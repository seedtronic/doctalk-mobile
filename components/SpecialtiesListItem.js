import React from "react"
import { connect } from "react-redux"
import { withNavigation } from "react-navigation"
import { compose, withProps } from "recompose"
import { setFilterSpecialtyId } from "../lib/reducers/map"
import { ListItem, Text } from "native-base"

export default compose(
  withNavigation,
  connect(({ map: { filter: { specialtyId } } }) => ({ specialtyId }), {
    setFilterSpecialtyId
  }),
  withProps(({ specialty, specialtyId }) => ({
    isSelected: specialty.id === specialtyId
  }))
)(SpecialtiesListItem)

function SpecialtiesListItem({
  specialty,
  isSelected,
  setFilterSpecialtyId,
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
    setFilterSpecialtyId(specialty.id)
    setTimeout(() => navigation.goBack(null), 400)
  }
  function style() {
    if (isSelected) {
      return {
        backgroundColor: "#62b1f6",
        marginLeft: 0,
        paddingLeft: 15
      }
    }
  }
}
