import gql from "graphql-tag"

export default gql`
  query DoctorsQuery($region: Region, $specialtyId: ID) {
    doctors(region: $region, specialtyId: $specialtyId) {
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
