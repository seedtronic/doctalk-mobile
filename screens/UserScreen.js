import React from "react"
import GenericScreen from "./GenericScreen"
import User from "../components/User"

export default function UserScreen() {
  return (
    <GenericScreen title="Meus dados">
      <User />
    </GenericScreen>
  )
}
