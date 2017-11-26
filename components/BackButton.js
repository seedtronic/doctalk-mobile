import React from "react"
import { Button } from "native-base"
import { MaterialIcons } from "@expo/vector-icons"

export default function BackButton({ onPress }) {
  return (
    <Button onPress={onPress} transparent>
      <MaterialIcons name="chevron-left" size={28} color="#2874F0" />
    </Button>
  )
}
