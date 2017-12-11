import React from "react"
import SearchButton from "../components/SearchButton"
import MapTitle from "../components/MapTitle"
import DoctorSearchTypeMenu from "./DoctorSearchTypeMenu"
import Header from "./Header"

export default function() {
  return (
    <Header
      TitleComponent={MapTitle}
      RightButton={SearchButton}
      Tabs={DoctorSearchTypeMenu}
    />
  )
}
