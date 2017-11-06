import React from "react"
import { Button } from "native-base"
import { compose } from "recompose"
import { withNavigation } from "react-navigation"
import { MaterialIcons } from "@expo/vector-icons"

export default compose(withNavigation)(SearchButton)

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
