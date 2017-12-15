import React from "react"
import DoctorSearchHeaderTitle from "../components/DoctorSearchHeaderTitle"
import DoctorSearchMenu from "./DoctorSearchMenu"
import Header from "./Header"

export default function() {
  return (
    <Header TitleComponent={DoctorSearchHeaderTitle} Tabs={DoctorSearchMenu} />
  )
}
