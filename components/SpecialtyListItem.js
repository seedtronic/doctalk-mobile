import React from "react"
import { connect } from "react-redux"
import styled from "styled-components/native"
import { withNavigation } from "react-navigation"
import { compose } from "recompose"
import { setSpecialtyId } from "../lib/reducers/mapFilter"

const Container = styled.TouchableOpacity`
  flex: 1;
  background-color: #fff;
  border-radius: 5;
  border-width: 1;
  border-color: #007aff;
  margin-left: 5;
  margin-right: 5;
`

const SpecialtyTitle = styled.Text`
  align-self: center;
  color: #007aff;
  font-size: 16;
  font-weight: 600;
  padding-top: 10;
  padding-bottom: 10;
`

function SpecialtyListItem({ specialty, setSpecialtyId, navigation }) {
  return (
    <Container onPress={onPress}>
      <SpecialtyTitle>{specialty.title}</SpecialtyTitle>
    </Container>
  )
  function onPress() {
    setSpecialtyId(specialty.id)
    navigation.goBack(null)
  }
}

export default compose(withNavigation, connect(null, { setSpecialtyId }))(
  SpecialtyListItem
)
