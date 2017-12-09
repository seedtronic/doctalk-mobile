import React from "react"
import { graphql } from "react-apollo"
import { compose, withProps } from "recompose"
import Profile from "../components/Profile"
import doctorAppointmentSchedulesQuery from "../graphql/doctorAppointmentSchedulesQuery"
import AppointmentScheduleList from "./AppointmentScheduleList"

export default compose(
  withProps(({ doctor }) => ({
    doctorId: doctor.id,
    includeArchive: false,
    includeScheduled: false
  })),
  graphql(doctorAppointmentSchedulesQuery, {
    props: ({ data }) => ({
      appointmentSchedules: data.doctor
        ? data.doctor.appointmentSchedules.edges.map(({ node }) => node)
        : null
    })
  }),
  withProps(({ doctor }) => ({
    renderHeader: () => <Profile subject={doctor} />
  }))
)(AppointmentScheduleList)
