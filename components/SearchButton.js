import React from "react"
import styled from "styled-components/native"
import { connect } from "react-redux"
import { compose } from "recompose"
import { Icon, Text } from "native-base"
import withNavigate from "../lib/withNavigate"
import FakeSmallButton from "./FakeSmallButton"

const StyledText = styled(Text)`
  font-size: 18;
  color: white;
  margin-left: 10;
`

const SearchIcon = styled(Icon).attrs({ name: "search" })`
  fontSize: 22;
  color: white;
  background-color: transparent;
`
export default compose(
  connect(({ doctors: { specialty } }) => ({ specialty })),
  withNavigate
)(SearchButton)

function SearchButton({ specialty, navigate }) {
  const text = specialty ? specialty.title : "Qual a especialidade?"
  return (
    <FakeSmallButton onPress={navigate("SearchScreen")}>
      <SearchIcon name="search" search={12} />
      <StyledText>{text}</StyledText>
    </FakeSmallButton>
  )
}
