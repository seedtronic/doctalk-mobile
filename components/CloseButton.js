import React from "react"
import { Button } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
import withNavigate from "../lib/withNavigate"

export default withNavigate(CloseButton)

function CloseButton({ goBack }) {
  return (
    <Button onPress={goBack} transparent>
      <MaterialIcons name="close" size={26} color="#2874F0" />
    </Button>
  )
}
