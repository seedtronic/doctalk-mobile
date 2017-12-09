import gql from "graphql-tag"

export default gql`
  query UserAppointmentSchedules($includeArchive: Boolean) {
    currentUser {
      id
      appointmentSchedules(includeArchive: $includeArchive) {
        edges {
          node {
            id
            startedAt
            doctor {
              id
              name
              specialty {
                id
                title
              }
            }
          }
        }
      }
    }
  }
`
