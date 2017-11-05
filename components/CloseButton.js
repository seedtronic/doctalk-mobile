import React from "react"
import { withNavigation } from "react-navigation"
import { Button, Icon } from "native-base"

export default withNavigation(CloseButton)

function CloseButton({ navigation }) {
  return (
    <Button onPress={onPress} transparent>
      <Icon name="close" />
    </Button>
  )

  function onPress() {
    navigation.goBack(null)
  }
}
