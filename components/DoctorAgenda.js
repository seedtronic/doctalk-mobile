import { graphql } from "react-apollo"
import { compose } from "recompose"
import appointmentSchedulesQuery from "../graphql/appointmentSchedulesQuery"
import AppointmentScheduleList from "./AppointmentScheduleList"

export default compose(
  graphql(appointmentSchedulesQuery, {
    props: ({ data: { appointmentSchedules } }) => ({
      appointmentSchedules: appointmentSchedules
        ? appointmentSchedules.edges.map(({ node }) => node)
        : null
    })
  })
)(AppointmentScheduleList)
