import React from "react"
import GenericScreen from "./GenericScreen"
import Doctors from "../components/Doctors"
import SearchButton from "../components/SearchButton"
import MapTitle from "../components/MapTitle"
import DoctorSearchTypeMenu from "../components/DoctorSearchTypeMenu"

export default function DoctorSearchByMapScreen() {
  return (
    <GenericScreen
      TitleComponent={MapTitle}
      RightButton={SearchButton}
      HeaderTabs={DoctorSearchTypeMenu}
    >
      <Doctors />
    </GenericScreen>
  )
}
