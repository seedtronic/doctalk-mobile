import React from "react"
import GenericScreen from "./GenericScreen"
import DoctorAgenda from "../components/DoctorAgenda"

export default function() {
  return (
    <GenericScreen title="Meus consultas">
      <DoctorAgenda />
    </GenericScreen>
  )
}
