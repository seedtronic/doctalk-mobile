import React from "react"
import GenericScreen from "./GenericScreen"
import DoctorSearchByList from "../components/DoctorSearchByList"
import SearchButton from "../components/SearchButton"
import MapTitle from "../components/MapTitle"
import DoctorSearchTypeMenu from "../components/DoctorSearchTypeMenu"

export default function DoctorSearchByListScreen() {
  return (
    <GenericScreen
      TitleComponent={MapTitle}
      RightButton={SearchButton}
      HeaderTabs={DoctorSearchTypeMenu}
    >
      <DoctorSearchByList />
    </GenericScreen>
  )
}
