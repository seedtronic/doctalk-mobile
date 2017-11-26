import React from "react"
import { MaterialIcons } from "@expo/vector-icons"
import HeaderButton from "./HeaderButton"

export default function CloseButton({ onPress }) {
  return (
    <HeaderButton onPress={onPress} transparent>
      <MaterialIcons name="close" size={26} color="#2874F0" />
    </HeaderButton>
  )
}
