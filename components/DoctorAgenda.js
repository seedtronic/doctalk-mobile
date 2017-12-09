import React from "react"
import { graphql } from "react-apollo"
import { compose, withProps } from "recompose"
import appointmentSchedulesQuery from "../graphql/appointmentSchedulesQuery"
import AppointmentScheduleList from "./AppointmentScheduleList"
import AddAppointmentScheduleButton from "./AddAppointmentScheduleButton"
import DestroyAppointmentScheduleButton from "./DestroyAppointmentScheduleButton"

export default compose(
  graphql(appointmentSchedulesQuery, {
    props: ({ data: { appointmentSchedules } }) => ({
      appointmentSchedules: appointmentSchedules
        ? appointmentSchedules.edges.map(({ node }) => node)
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
