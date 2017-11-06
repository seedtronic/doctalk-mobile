import React from "react"
import { withNavigation } from "react-navigation"
import { Button } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"

export default withNavigation(BackButton)

function BackButton({ navigation }) {
  return (
    <Button onPress={onPress} transparent>
      <MaterialIcons name="chevron-left" size={28} color="#2874F0" />
    </Button>
  )

  function onPress() {
    navigation.goBack(null)
  }
}
