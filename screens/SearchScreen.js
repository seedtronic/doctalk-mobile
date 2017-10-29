import React from "react"
import GenericScreen from "./GenericScreen"
import SpecialtiesList from "../components/SpecialtiesList"

export default function SearchScreen() {
  return (
    <GenericScreen title="Escolha uma especialidade">
      <SpecialtiesList />
    </GenericScreen>
  )
}
