import React from "react"
import WideButton from "./WideButton"
import { MaterialIcons } from "@expo/vector-icons"

export default function() {
  return (
    <WideButton
      iconName="add"
      IconProvider={MaterialIcons}
      label="Adicionar horário"
    />
  )
}
