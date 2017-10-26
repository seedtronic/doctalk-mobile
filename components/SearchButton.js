import React from "react"
import { Button, Icon } from "native-base"
import { compose } from "recompose"
import { withNavigation } from "react-navigation"

export default compose(withNavigation)(SearchButton)

function SearchButton({ navigation }) {
  return (
    <Button onPress={onPress} transparent>
      <Icon name="search" />
    </Button>
  )

  function onPress() {
    navigation.navigate("SearchScreenNavigator")
  }
}
