import React from "react"
import GenericScreen from "./GenericScreen"
import BackButtonWithHandler from "../components/BackButtonWithHandler"
import NewAppointmentSchedule from "../components/NewAppointmentSchedule"

export default function EditDoctorScreen() {
  return (
    <GenericScreen
      title="Novo horário para atendimento"
      LeftButton={BackButtonWithHandler}
    >
      <NewAppointmentSchedule />
    </GenericScreen>
  )
}
