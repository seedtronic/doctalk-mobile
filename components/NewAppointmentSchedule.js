import { graphql } from "react-apollo"
import { compose, withHandlers } from "recompose"
import AppointmentScheduleForm from "./AppointmentScheduleForm"
import createAppointmentScheduleMutation from "../graphql/createAppointmentScheduleMutation"
import withNavigate from "../lib/withNavigate"
import { DateTime } from "luxon"

export default compose(
  graphql(createAppointmentScheduleMutation, {
    props: ({ mutate }) => ({
      createAppointmentSchedule: appointmentSchedule =>
        mutate({ variables: { appointmentSchedule } })
    })
  }),
  withNavigate,
  withHandlers({
    onSubmit: ({ createAppointmentSchedule, goBack }) => ({
      date,
      time,
      ...values
    }) =>
      createAppointmentSchedule({
        ...values,
        startedAt: toStartedAt(date, time)
      }).then(goBack)
  })
)(AppointmentScheduleForm)

function toStartedAt(date, time) {
  const { year, month, day } = DateTime.fromISO(date)
  const { hour, minute } = DateTime.fromISO(time)
  return DateTime.fromObject({ year, month, day, hour, minute }).toISO()
}
