import React from "react"
import { graphql } from "react-apollo"
import { compose, withProps } from "recompose"
import doctorAppointmentSchedulesQuery from "../graphql/doctorAppointmentSchedulesQuery"
import AppointmentScheduleList from "./AppointmentScheduleList"
import DoctorAppointmentScheduleListItem from "./DoctorAppointmentScheduleListItem"
import AddAppointmentScheduleButton from "./AddAppointmentScheduleButton"
import DestroyAppointmentScheduleButton from "./DestroyAppointmentScheduleButton"
import withCurrentUser from "../lib/withCurrentUser"
import withRefetchOnChangeToCurrentScreen from "../lib/withRefetchOnChangeToCurrentScreen"

export default compose(
  withCurrentUser(true),
  withProps(({ currentUser }) => ({ doctorId: currentUser.doctor.id })),
  graphql(doctorAppointmentSchedulesQuery, {
    props: ({ data: { doctor, refetch } }) => ({
      refetch,
      appointmentSchedules: doctor
        ? doctor.appointmentSchedules.edges.map(({ node }) => node)
        : null
    }),
    options: {
      fetchPolicy: "cache-and-network"
    }
  }),
  withRefetchOnChangeToCurrentScreen("DoctorAgendaScreen"),
  withProps({
    ListItem: DoctorAppointmentScheduleListItem,
    renderHeader: () => <AddAppointmentScheduleButton />,
    renderRightHiddenRow: appointmentSchedule => (
      <DestroyAppointmentScheduleButton
        appointmentScheduleId={appointmentSchedule.id}
      />
    )
  })
)(AppointmentScheduleList)
