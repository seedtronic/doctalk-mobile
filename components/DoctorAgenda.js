import React from "react"
import { graphql } from "react-apollo"
import { branch, compose, renderComponent, withProps } from "recompose"
import doctorAppointmentSchedulesQuery from "../graphql/doctorAppointmentSchedulesQuery"
import AppointmentScheduleList from "./AppointmentScheduleList"
import DoctorAppointmentScheduleListItem from "./DoctorAppointmentScheduleListItem"
import AddAppointmentScheduleButton from "./AddAppointmentScheduleButton"
import DestroyAppointmentScheduleButton from "./DestroyAppointmentScheduleButton"
import DestroyAppointmentButton from "./DestroyAppointmentButton"
import SpinnerView from "./SpinnerView"
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
  branch(
    ({ appointmentSchedules }) => !appointmentSchedules,
    renderComponent(SpinnerView)
  ),
  withProps({
    ListItem: DoctorAppointmentScheduleListItem,
    renderHeader: () => <AddAppointmentScheduleButton />,
    renderRightHiddenRow: appointmentSchedule =>
      appointmentSchedule.appointment ? (
        <DestroyAppointmentButton
          appointmentId={appointmentSchedule.appointment.id}
        />
      ) : (
        <DestroyAppointmentScheduleButton
          appointmentScheduleId={appointmentSchedule.id}
        />
      )
  })
)(AppointmentScheduleList)
