import React from "react"
import { connect } from "react-redux"
import { Button } from "native-base"
import { branch, compose, renderComponent } from "recompose"
import { withNavigation } from "react-navigation"
import { MaterialIcons } from "@expo/vector-icons"
import Spinner from "./Spinner"

export default compose(
  connect(({ mapFilter: { loading } }) => ({ loading })),
  branch(({ loading }) => loading, renderComponent(LoadingButton)),
  withNavigation
)(SearchButton)

function LoadingButton() {
  return (
    <Button transparent>
      <Spinner />
    </Button>
  )
}

function SearchButton({ navigation }) {
  return (
    <Button onPress={onPress} transparent>
      <MaterialIcons name="search" size={26} color="#2874F0" />
    </Button>
  )

  function onPress() {
    navigation.navigate("SearchScreenNavigator")
  }
}
