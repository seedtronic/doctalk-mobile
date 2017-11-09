import React from "react"
import GenericScreen from "./GenericScreen"
import Search from "../components/Search"
import CloseButton from "../components/CloseButton"

export default function SearchScreen() {
  return (
    <GenericScreen title="Escolha a especialidade" RightButton={CloseButton}>
      <Search />
    </GenericScreen>
  )
}
