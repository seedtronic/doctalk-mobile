import gql from "graphql-tag"

export default gql`
  query DoctorsQuery($specialtyId: ID) {
    doctors(specialtyId: $specialtyId) {
      edges {
        node {
          id
          name
          lat
          lng
          imageUrl
        }
      }
    }
  }
`
