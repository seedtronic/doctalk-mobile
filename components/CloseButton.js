import React from "react"
import { withNavigation } from "react-navigation"
import { Button } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"

export default withNavigation(CloseButton)

function CloseButton({ navigation }) {
  return (
    <Button onPress={onPress} transparent>
      <MaterialIcons name="close" size={26} color="#2874F0" />
    </Button>
  )

  function onPress() {
    navigation.goBack(null)
  }
}
