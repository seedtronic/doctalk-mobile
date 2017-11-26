import React from "react"
import { MaterialIcons } from "@expo/vector-icons"
import withNavigate from "../lib/withNavigate"
import HeaderButton from "./HeaderButton"

export default withNavigate(CloseButton)

function CloseButton({ goBack }) {
  return (
    <HeaderButton onPress={goBack} transparent>
      <MaterialIcons name="close" size={26} color="#2874F0" />
    </HeaderButton>
  )
}
