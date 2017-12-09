import gql from "graphql-tag"

export default gql`
  mutation CreateAppointment($appointmentScheduleId: ID!) {
    createAppointment(appointmentScheduleId: $appointmentScheduleId) {
      id
      appointmentSchedule {
        id
        appointment {
          id
        }
      }
    }
  }
`
