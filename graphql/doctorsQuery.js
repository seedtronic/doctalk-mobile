import gql from "graphql-tag"

export default gql`
  query Doctors($region: RegionInput, $specialtyId: ID) {
    doctors(region: $region, specialtyId: $specialtyId) {
      edges {
        node {
          id
          name
          photoUrl
          address {
            id
            lat
            lng
          }
        }
      }
    }
  }
`
