import React from "react"
import { graphql } from "react-apollo"
import { compose, withProps } from "recompose"
import userAppointmentSchedulesQuery from "../graphql/userAppointmentSchedulesQuery"
import AppointmentScheduleList from "./AppointmentScheduleList"
import UserAppointmentScheduleListItem from "./UserAppointmentScheduleListItem"
import DestroyAppointmentButton from "./DestroyAppointmentButton"
import withCurrentUser from "../lib/withCurrentUser"
import withRefetchOnChangeToCurrentScreen from "../lib/withRefetchOnChangeToCurrentScreen"
import withNavigate from "../lib/withNavigate"

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
  withNavigate,
  withProps(({ navigate }) => ({
    onEmptyList: navigate("DoctorsNavigator"),
    ListItem: UserAppointmentScheduleListItem,
    renderRightHiddenRow: appointmentSchedule =>
      appointmentSchedule.appointment && (
        <DestroyAppointmentButton
          appointmentId={appointmentSchedule.appointment.id}
        />
      )
  }))
)(AppointmentScheduleList)
