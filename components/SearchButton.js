import React from "react"
import { connect } from "react-redux"
import { branch, compose, renderComponent } from "recompose"
import { MaterialIcons } from "@expo/vector-icons"
import Spinner from "./Spinner"
import withNavigate from "../lib/withNavigate"
import HeaderButton from "./HeaderButton"

export default compose(
  connect(({ map: { loading } }) => ({ loading })),
  branch(({ loading }) => loading, renderComponent(LoadingButton)),
  withNavigate
)(SearchButton)

function LoadingButton() {
  return (
    <HeaderButton transparent>
      <Spinner />
    </HeaderButton>
  )
}

function SearchButton({ navigate }) {
  return (
    <HeaderButton onPress={navigate("SearchScreen")} transparent>
      <MaterialIcons name="search" size={26} color="#2874F0" />
    </HeaderButton>
  )
}
