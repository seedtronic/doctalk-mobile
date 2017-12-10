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
            street
            number
            complement
            city
            state
            zipcode
            lat
            lng
          }
          specialty {
            id
            title
          }
        }
      }
    }
  }
`
