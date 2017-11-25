import gql from "graphql-tag"

export default gql`
  query DoctorsQuery($region: RegionInput, $specialtyId: ID) {
    doctors(region: $region, specialtyId: $specialtyId) {
      edges {
        node {
          id
          name
          imageUrl
          address {
            lat
            lng
          }
        }
      }
    }
  }
`
