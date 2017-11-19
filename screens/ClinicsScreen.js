import React from "react"
import GenericScreen from "./GenericScreen"
import Clinics from "../components/Clinics"

export default function() {
  return (
    <GenericScreen title="Escolha uma clínica">
      <Clinics />
    </GenericScreen>
  )
}
