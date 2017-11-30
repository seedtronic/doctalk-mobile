import gql from "graphql-tag"

export default gql`
  mutation CreateDoctor($doctor: DoctorInput!) {
    createDoctor(doctor: $doctor) {
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
