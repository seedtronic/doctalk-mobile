import React from "react"
import { graphql } from "react-apollo"
import { compose, withProps } from "recompose"
import DoctorProfileHead from "./DoctorProfileHead"
import AppointmentScheduleList from "./AppointmentScheduleList"
import AppointmentScheduleListItem from "./AppointmentScheduleListItem"
import doctorAppointmentSchedulesQuery from "../graphql/doctorAppointmentSchedulesQuery"

export default compose(
  withProps(({ doctor }) => ({
    doctorId: doctor.id,
    includeArchive: false,
    includeScheduled: false
  })),
  graphql(doctorAppointmentSchedulesQuery, {
    props: ({ data }) => ({
      appointmentSchedules: data.doctor
        ? data.doctor.appointmentSchedules.edges.map(({ node }) => node)
        : null
    }),
    options: {
      fetchPolicy: "cache-and-network"
    }
  }),
  withProps(({ doctor, appointmentSchedules }) => ({
    ListItem: AppointmentScheduleListItem,
    renderHeader: () => (
      <DoctorProfileHead
        doctor={doctor}
        appointmentSchedules={appointmentSchedules}
      />
    )
  }))
)(AppointmentScheduleList)
