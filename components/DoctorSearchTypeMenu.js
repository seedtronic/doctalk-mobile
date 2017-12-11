import React from "react"
import { Segment } from "native-base"
import DoctorSearchTypeMenuButton from "./DoctorSearchTypeMenuButton"

export default function DoctorSearchTypeMenu() {
  return (
    <Segment>
      <DoctorSearchTypeMenuButton
        label="Lista"
        routeName="DoctorSearchByListScreen"
        first
      />
      <DoctorSearchTypeMenuButton
        label="Mapa"
        routeName="DoctorSearchByMapScreen"
        last
      />
    </Segment>
  )
}
