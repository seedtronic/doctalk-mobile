import React from "react"
import GenericScreen from "./GenericScreen"
import BackButtonWithHandler from "../components/BackButtonWithHandler"
import NewDoctor from "../components/NewDoctor"

export default function NewDoctorScreen() {
  return (
    <GenericScreen
      title="Cadastro do médico"
      LeftButton={BackButtonWithHandler}
    >
      <NewDoctor />
    </GenericScreen>
  )
}
