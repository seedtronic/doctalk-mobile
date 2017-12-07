import gql from "graphql-tag"

export default gql`
  query Doctor($doctorId: ID!) {
    doctor(id: $doctorId) {
      id
      name
      imageUrl
      crm
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
`
