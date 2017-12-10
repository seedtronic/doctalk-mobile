import React from "react"
import { graphql } from "react-apollo"
import { branch, compose, renderComponent, withProps } from "recompose"
import userAppointmentSchedulesQuery from "../graphql/userAppointmentSchedulesQuery"
import AppointmentScheduleList from "./AppointmentScheduleList"
import UserAppointmentScheduleListItem from "./UserAppointmentScheduleListItem"
import DestroyAppointmentButton from "./DestroyAppointmentButton"
import SpinnerView from "./SpinnerView"
import withCurrentUser from "../lib/withCurrentUser"
import withRefetchOnChangeToCurrentScreen from "../lib/withRefetchOnChangeToCurrentScreen"
import withIsCurrentRoute from "../lib/withIsCurrentRoute"

export default compose(
  withCurrentUser(true),
  graphql(userAppointmentSchedulesQuery, {
    props: ({ data: { currentUser, refetch } }) => ({
      refetch,
      appointmentSchedules: currentUser
        ? currentUser.appointmentSchedules.edges.map(({ node }) => node)
        : null
    }),
    options: {
      fetchPolicy: "cache-and-network"
    }
  }),
  withRefetchOnChangeToCurrentScreen("UserAgendaScreen"),
  branch(
    ({ appointmentSchedules }) => !appointmentSchedules,
    renderComponent(SpinnerView)
  ),
  withIsCurrentRoute("UserAgendaScreen"),
  withProps(({ navigate }) => ({
    ListItem: UserAppointmentScheduleListItem,
    renderRightHiddenRow: appointmentSchedule =>
      appointmentSchedule.appointment && (
        <DestroyAppointmentButton
          appointmentId={appointmentSchedule.appointment.id}
        />
      )
  }))
)(AppointmentScheduleList)
