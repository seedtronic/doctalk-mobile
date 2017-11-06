import React from "react"
import { withNavigation } from "react-navigation"
import { Button } from "native-base"
import { Ionicons } from "@expo/vector-icons"

export default withNavigation(BackButton)

function BackButton({ navigation }) {
  return (
    <Button onPress={onPress} transparent>
      <Ionicons name="ios-arrow-back" size={24} color="#62b1f6" />
    </Button>
  )

  function onPress() {
    navigation.goBack(null)
  }
}
