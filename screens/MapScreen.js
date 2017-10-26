import React from "react"
import GenericScreen from "./GenericScreen"
import Map from "../components/Map"
import SearchButton from "../components/SearchButton"

export default function() {
  return (
    <GenericScreen title="Escolha um médico" RightButton={SearchButton}>
      <Map />
    </GenericScreen>
  )
}
