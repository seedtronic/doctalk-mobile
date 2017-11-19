import React from "react"
import { connect } from "react-redux"
import { Button } from "native-base"
import { branch, compose, renderComponent } from "recompose"
import { MaterialIcons } from "@expo/vector-icons"
import Spinner from "./Spinner"
import withNavigate from "../lib/withNavigate"

export default compose(
  connect(({ map: { loading } }) => ({ loading })),
  branch(({ loading }) => loading, renderComponent(LoadingButton)),
  withNavigate
)(SearchButton)

function LoadingButton() {
  return (
    <Button transparent>
      <Spinner />
    </Button>
  )
}

function SearchButton({ navigate }) {
  return (
    <Button onPress={navigate("SearchScreen")} transparent>
      <MaterialIcons name="search" size={26} color="#2874F0" />
    </Button>
  )
}
