import React from "react"
import WideButton from "./WideButton"
import { MaterialIcons } from "@expo/vector-icons"
import withNavigate from "../lib/withNavigate"
import AppointmentScheduleList from "./AppointmentScheduleList"

export default withNavigate(DoctorAgenda)

function DoctorAgenda({ navigate }) {
  return [
    <WideButton
      key="0"
      iconName="add"
      IconProvider={MaterialIcons}
      label="Abrir horário para atendimento"
      onPress={navigate("NewAppointmentScheduleScreen")}
    />,
    <AppointmentScheduleList key="1" />
  ]
}
