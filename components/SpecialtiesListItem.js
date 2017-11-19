import React from "react"
import { connect } from "react-redux"
import withNavigate from "../lib/withNavigate"
import { compose, withProps } from "recompose"
import { setFilterSpecialtyId } from "../lib/reducers/map"
import { ListItem, Text } from "native-base"

export default compose(
  withNavigate,
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
  goBack
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
    setTimeout(goBack, 400)
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
