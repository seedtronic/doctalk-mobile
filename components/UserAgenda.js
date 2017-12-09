import React from "react"
import { graphql } from "react-apollo"
import { compose, withProps } from "recompose"
import userAppointmentSchedulesQuery from "../graphql/userAppointmentSchedulesQuery"
import AppointmentScheduleList from "./AppointmentScheduleList"
import AppointmentScheduleListItem from "./AppointmentScheduleListItem"
import DestroyAppointmentScheduleButton from "./DestroyAppointmentScheduleButton"
import withCurrentUser from "../lib/withCurrentUser"

export default compose(
  withCurrentUser(true),
  graphql(userAppointmentSchedulesQuery, {
    props: ({ data }) => ({
      appointmentSchedules: data.currentUser
        ? data.currentUser.appointmentSchedules.edges.map(({ node }) => node)
        : null
    }),
    options: {
      fetchPolicy: "cache-and-network"
    }
  }),
  withProps({
    ListItem: AppointmentScheduleListItem,
    renderRightHiddenRow: appointmentSchedule => (
      <DestroyAppointmentScheduleButton
        appointmentScheduleId={appointmentSchedule.id}
      />
    )
  })
)(AppointmentScheduleList)
