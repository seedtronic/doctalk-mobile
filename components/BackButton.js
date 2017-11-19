import React from "react"
import { Button } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"
import withNavigate from "../lib/withNavigate"

export default withNavigate(BackButton)

function BackButton({ goBack }) {
  return (
    <Button onPress={goBack} transparent>
      <MaterialIcons name="chevron-left" size={28} color="#2874F0" />
    </Button>
  )
}
