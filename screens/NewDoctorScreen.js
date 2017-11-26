import React from "react"
import GenericScreen from "./GenericScreen"
import GoBackButton from "../components/GoBackButton"
import NewDoctor from "../components/NewDoctor"

export default function NewDoctorScreen() {
  return (
    <GenericScreen title="Cadastro do médico" LeftButton={GoBackButton}>
      <NewDoctor />
    </GenericScreen>
  )
}
