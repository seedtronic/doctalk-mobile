import React from "react"
import styled from "styled-components/native"
import { connect } from "react-redux"
import withNavigate from "../lib/withNavigate"
import { compose, withProps } from "recompose"
import { setSpecialty } from "../lib/reducers/doctors"
import { ListItem, Text } from "native-base"

const StyledListItem = styled(ListItem)`
  background-color: ${props => (props.isSelected ? "#62b1f6" : "white")};
  padding-left: 10;
`
const StyledText = styled(Text)`
  color: ${props => (props.isSelected ? "white" : "black")};
`

export default compose(
  withNavigate,
  connect(({ doctors: { specialty } }) => ({ selectedSpecialty: specialty }), {
    setSpecialty
  }),
  withProps(({ item, selectedSpecialty }) => ({
    specialty: item,
    isSelected: selectedSpecialty && item.id === selectedSpecialty.id
  }))
)(SpecialtiesListItem)

function SpecialtiesListItem({ specialty, isSelected, setSpecialty, goBack }) {
  return (
    <StyledListItem onPress={onPress} isSelected={isSelected}>
      <StyledText isSelected={isSelected}>{specialty.title}</StyledText>
    </StyledListItem>
  )
  function onPress() {
    setSpecialty(isSelected ? null : specialty)
    setTimeout(goBack, 400)
  }
}
