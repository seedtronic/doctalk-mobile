import React from "react"
import GenericScreen from "./GenericScreen"
import UserAgenda from "../components/UserAgenda"

export default function() {
  return (
    <GenericScreen title="Minhas consultas">
      <UserAgenda />
    </GenericScreen>
  )
}
