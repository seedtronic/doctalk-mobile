import gql from "graphql-tag"

export default gql`
  mutation DestroyAppointmentSchedule($appointmentScheduleId: ID!) {
    destroyAppointmentSchedule(appointmentScheduleId: $appointmentScheduleId) {
      id
    }
  }
`
