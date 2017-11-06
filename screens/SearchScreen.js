import React from "react"
import GenericScreen from "./GenericScreen"
import SpecialtiesList from "../components/SpecialtiesList"
import CloseButton from "../components/CloseButton"

export default function SearchScreen() {
  return (
    <GenericScreen title="Escolha a especialidade" RightButton={CloseButton}>
      <SpecialtiesList />
    </GenericScreen>
  )
}
