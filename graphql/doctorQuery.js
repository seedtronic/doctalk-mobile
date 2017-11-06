import gql from "graphql-tag"

export default gql`
  query DoctorQuery($doctorId: ID!) {
    doctor(id: $doctorId) {
      id
      name
      lat
      lng
      imageUrl
      specialty {
        title
      }
    }
  }
`
