import React from "react"
import MapTitle from "../components/MapTitle"
import DoctorSearchMenu from "./DoctorSearchMenu"
import Header from "./Header"

export default function() {
  return <Header TitleComponent={MapTitle} Tabs={DoctorSearchMenu} />
}
