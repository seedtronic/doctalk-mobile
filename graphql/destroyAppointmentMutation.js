import gql from "graphql-tag"

export default gql`
  mutation DestroyAppointment($appointmentId: ID!) {
    destroyAppointment(appointmentId: $appointmentId) {
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
