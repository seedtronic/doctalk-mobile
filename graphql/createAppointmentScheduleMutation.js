import gql from "graphql-tag"

export default gql`
  mutation CreateAppointmentSchedule(
    $appointmentSchedule: AppointmentScheduleInput!
  ) {
    createAppointmentSchedule(appointmentSchedule: $appointmentSchedule) {
      id
    }
  }
`
