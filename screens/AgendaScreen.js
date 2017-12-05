import React from "react"
import GenericScreen from "./GenericScreen"
import Agenda from "../components/Agenda"

export default function() {
  return (
    <GenericScreen title="Minhas consultas">
      <Agenda />
    </GenericScreen>
  )
}
