import React from "react"
import GenericScreen from "./GenericScreen"
import BackButtonWithHandler from "../components/BackButtonWithHandler"
import EditDoctor from "../components/EditDoctor"

export default function EditDoctorScreen() {
  return (
    <GenericScreen
      title="Cadastro do médico"
      LeftButton={BackButtonWithHandler}
    >
      <EditDoctor />
    </GenericScreen>
  )
}
