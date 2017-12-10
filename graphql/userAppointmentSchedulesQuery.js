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
            appointment {
              id
              user {
                id
              }
            }
            doctor {
              id
              name
              photoUrl
              specialty {
                id
                title
              }
              address {
                id
                street
                number
                complement
                city
                state
                zipcode
                lat
                lng
              }
            }
          }
        }
      }
    }
  }
`
