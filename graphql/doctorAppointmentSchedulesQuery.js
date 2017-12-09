import gql from "graphql-tag"

export default gql`
  query DoctorAppointmentSchedules(
    $doctorId: ID!
    $includeArchive: Boolean
    $includeScheduled: Boolean
  ) {
    doctor(id: $doctorId) {
      id
      appointmentSchedules(
        includeArchive: $includeArchive
        includeScheduled: $includeScheduled
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
