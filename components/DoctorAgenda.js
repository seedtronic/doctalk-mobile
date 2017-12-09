import React from "react"
import { graphql } from "react-apollo"
import { compose, withProps } from "recompose"
import doctorAppointmentSchedulesQuery from "../graphql/doctorAppointmentSchedulesQuery"
import AppointmentScheduleList from "./AppointmentScheduleList"
import AddAppointmentScheduleButton from "./AddAppointmentScheduleButton"
import DestroyAppointmentScheduleButton from "./DestroyAppointmentScheduleButton"
import withCurrentUser from "../lib/withCurrentUser"

export default compose(
  withCurrentUser(true),
  withProps(({ currentUser }) => ({
    doctorId: currentUser.doctor.id,
    includeArchive: false,
    includeScheduled: true
  })),
  graphql(doctorAppointmentSchedulesQuery, {
    props: ({ data }) => ({
      appointmentSchedules: data.doctor
        ? data.doctor.appointmentSchedules.edges.map(({ node }) => node)
        : null
    })
  }),
  withProps({
    renderHeader: () => <AddAppointmentScheduleButton />,
    renderRightHiddenRow: appointmentSchedule => (
      <DestroyAppointmentScheduleButton
        appointmentScheduleId={appointmentSchedule.id}
      />
    )
  })
)(AppointmentScheduleList)
