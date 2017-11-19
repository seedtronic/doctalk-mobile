import React from "react"
import GenericScreen from "./GenericScreen"
import Map from "../components/Map"
import SearchButton from "../components/SearchButton"
import MapTitle from "../components/MapTitle"

export default function() {
  return (
    <GenericScreen TitleComponent={MapTitle} RightButton={SearchButton}>
      <Map />
    </GenericScreen>
  )
}
