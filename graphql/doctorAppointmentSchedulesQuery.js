import gql from "graphql-tag"

export default gql`
  query DoctorAppointmentSchedules(
    $doctorId: ID!
    $includeArchive: Boolean
    $excludeScheduled: Boolean
  ) {
    doctor(id: $doctorId) {
      id
      appointmentSchedules(
        includeArchive: $includeArchive
        excludeScheduled: $excludeScheduled
      ) {
        edges {
          node {
            id
            startedAt
          }
        }
      }
    }
  }
`
