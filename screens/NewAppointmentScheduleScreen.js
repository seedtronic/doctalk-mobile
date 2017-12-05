import React from "react"
import GenericScreen from "./GenericScreen"
import BackButtonWithHandler from "../components/BackButtonWithHandler"
import NewAppointmentSchedule from "../components/NewAppointmentSchedule"

export default function EditDoctorScreen() {
  return (
    <GenericScreen title="Adicionar horário" LeftButton={BackButtonWithHandler}>
      <NewAppointmentSchedule />
    </GenericScreen>
  )
}
