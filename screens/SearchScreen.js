import React from "react"
import GenericScreen from "./GenericScreen"
import Search from "../components/Search"
import CloseButtonWithHandler from "../components/CloseButtonWithHandler"

export default function SearchScreen() {
  return (
    <GenericScreen
      title="Escolha uma especialidade"
      RightButton={CloseButtonWithHandler}
    >
      <Search />
    </GenericScreen>
  )
}
