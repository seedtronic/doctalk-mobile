import gql from "graphql-tag"

export default gql`
  mutation UpsertDoctor($doctor: DoctorInput!) {
    upsertDoctor(doctor: $doctor) {
      id
      user {
        id
        doctor {
          id
        }
      }
    }
  }
`
