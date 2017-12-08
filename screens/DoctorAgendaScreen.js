import React from "react"
import GenericScreen from "./GenericScreen"
import DoctorAgenda from "../components/DoctorAgenda"

export default function() {
  return (
    <GenericScreen title="Minhas consultas">
      <DoctorAgenda />
    </GenericScreen>
  )
}
