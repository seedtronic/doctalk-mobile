import React from "react"
import { graphql } from "react-apollo"
import {
  branch,
  compose,
  lifecycle,
  renderComponent,
  withProps
} from "recompose"
import userAppointmentSchedulesQuery from "../graphql/userAppointmentSchedulesQuery"
import AppointmentScheduleList from "./AppointmentScheduleList"
import UserAppointmentScheduleListItem from "./UserAppointmentScheduleListItem"
import DestroyAppointmentButton from "./DestroyAppointmentButton"
import SpinnerView from "./SpinnerView"
import withCurrentUser from "../lib/withCurrentUser"
import withRefetchOnChangeToCurrentScreen from "../lib/withRefetchOnChangeToCurrentScreen"
import withNavigate from "../lib/withNavigate"
import withIsCurrentRoute from "../lib/withIsCurrentRoute"
import isEmpty from "lodash/isEmpty"

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
  withNavigate,
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.isCurrentRoute && isEmpty(nextProps.appointmentSchedules)) {
        nextProps.navigate("DoctorsNavigator")()
      }
    }
  }),
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
