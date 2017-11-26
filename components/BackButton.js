import React from "react"
import { MaterialIcons } from "@expo/vector-icons"
import HeaderButton from "./HeaderButton"

export default function BackButton({ onPress }) {
  return (
    <HeaderButton onPress={onPress} transparent>
      <MaterialIcons name="chevron-left" size={28} color="#2874F0" />
    </HeaderButton>
  )
}
