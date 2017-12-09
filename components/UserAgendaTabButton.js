import React from "react"
import { graphql } from "react-apollo"
import { branch, compose, renderNothing } from "recompose"
import TabButton from "./TabButton"
import userAppointmentSchedulesQuery from "../graphql/userAppointmentSchedulesQuery"
import withCurrentUser from "../lib/withCurrentUser"

export default compose(
  withCurrentUser(false),
  branch(({ currentUser }) => !currentUser, renderNothing),
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
  branch(
    ({ appointmentSchedules }) =>
      !appointmentSchedules || appointmentSchedules.length === 0,
    renderNothing
  )
)(TabBar)

function TabBar() {
  return (
    <TabButton
      label="Agenda"
      iconName="calendar"
      routeName="UserAgendaNavigator"
    />
  )
}
