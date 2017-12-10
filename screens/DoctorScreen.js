import React from "react"
import { withNavigation } from "react-navigation"
import { branch, compose, renderComponent, withProps } from "recompose"
import { graphql } from "react-apollo"
import GenericScreen from "./GenericScreen"
import doctorQuery from "../graphql/doctorQuery"
import Spinner from "../components/Spinner"
import Doctor from "../components/Doctor"
import BackButtonWithHandler from "../components/BackButtonWithHandler"

export default compose(
  withNavigation,
  withProps(({ navigation }) => ({
    doctorId: navigation.state.params.doctorId
  })),
  graphql(doctorQuery, {
    props: ({ data: { doctor } }) => ({ doctor })
  }),
  branch(({ doctor }) => !doctor, renderComponent(Loading))
)(DoctorScreen)

function DoctorScreen({ doctor }) {
  return (
    <GenericScreen
      LeftButton={BackButtonWithHandler}
      title={doctor.specialty.title}
    >
      <Doctor doctor={doctor} />
    </GenericScreen>
  )
}

function Loading() {
  return (
    <GenericScreen
      LeftButton={BackButtonWithHandler}
      TitleComponent={Spinner}
    />
  )
}
