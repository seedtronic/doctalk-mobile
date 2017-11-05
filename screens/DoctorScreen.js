import React from "react"
import { withNavigation } from "react-navigation"
import { compose, withProps } from "recompose"
import GenericScreen from "./GenericScreen"
import DoctorProfile from "../components/DoctorProfile"

export default compose(
  withNavigation,
  withProps(({ navigation }) => ({
    doctorId: navigation.state.params.doctorId
  }))
)(DoctorScreen)

function DoctorScreen({ doctorId }) {
  return (
    <GenericScreen title="Médico">
      <DoctorProfile doctorId={doctorId} />
    </GenericScreen>
  )
}
