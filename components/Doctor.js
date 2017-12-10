import React from "react"
import { graphql } from "react-apollo"
import { compose, withProps } from "recompose"
import DoctorProfileHead from "./DoctorProfileHead"
import AppointmentScheduleList from "./AppointmentScheduleList"
import AvailableAppointmentScheduleListItem from "./AvailableAppointmentScheduleListItem"
import doctorAppointmentSchedulesQuery from "../graphql/doctorAppointmentSchedulesQuery"
import withSpinnerWhenLoading from "../lib/withSpinnerWhenLoading"

export default compose(
  withProps(({ doctor }) => ({
    doctorId: doctor.id,
    excludeScheduled: true
  })),
  graphql(doctorAppointmentSchedulesQuery, {
    props: ({ data: { doctor } }) => {
      return {
        appointmentSchedules: doctor
          ? doctor.appointmentSchedules.edges.map(({ node }) => node)
          : null
      }
    },
    options: {
      fetchPolicy: "cache-and-network"
    }
  }),
  withSpinnerWhenLoading("appointmentSchedules"),
  withProps(({ doctor, appointmentSchedules }) => ({
    ListItem: AvailableAppointmentScheduleListItem,
    renderHeader: () => (
      <DoctorProfileHead
        doctor={doctor}
        appointmentSchedules={appointmentSchedules}
      />
    )
  }))
)(AppointmentScheduleList)
