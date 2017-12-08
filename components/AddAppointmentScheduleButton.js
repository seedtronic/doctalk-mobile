import React from "react"
import WideButton from "./WideButton"
import { MaterialIcons } from "@expo/vector-icons"
import withNavigate from "../lib/withNavigate"

export default withNavigate(NewAppointmentScheduleButton)

function NewAppointmentScheduleButton({ navigate }) {
  return (
    <WideButton
      iconName="add"
      IconProvider={MaterialIcons}
      label="Abrir horário para atendimento"
      onPress={navigate("NewAppointmentScheduleScreen")}
    />
  )
}
