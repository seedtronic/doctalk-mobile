import gql from "graphql-tag"

export default gql`
  query AppointmentSchedules {
    appointmentSchedules {
      edges {
        node {
          id
          startedAt
        }
      }
    }
  }
`
