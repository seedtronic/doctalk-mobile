import React from "react"
import { withNavigation } from "react-navigation"
import { branch, compose, renderComponent, withProps } from "recompose"
import { graphql } from "react-apollo"
import GenericScreen from "./GenericScreen"
import DoctorProfile from "../components/DoctorProfile"
import doctorQuery from "../graphql/doctorQuery"
import Spinner from "../components/Spinner"

export default compose(
  withNavigation,
  withProps(({ navigation }) => ({
    doctorId: navigation.state.params.doctorId
  })),
  graphql(doctorQuery),
  branch(({ data }) => data.loading, renderComponent(Loading)),
  withProps(({ data: { doctor } }) => ({ doctor }))
)(DoctorScreen)

function DoctorScreen({ doctor }) {
  return (
    <GenericScreen title="Médico">
      <DoctorProfile doctor={doctor} />
    </GenericScreen>
  )
}

function Loading() {
  return <GenericScreen TitleComponent={Spinner} />
}
