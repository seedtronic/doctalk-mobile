import { graphql } from "react-apollo"
import { compose, withHandlers } from "recompose"
import DoctorForm from "./DoctorForm"
import createDoctorMutation from "../graphql/createDoctorMutation"
import withNavigate from "../lib/withNavigate"

export default compose(
  withNavigate,
  graphql(createDoctorMutation, {
    props: ({ mutate }) => ({
      createDoctor: doctor => mutate({ variables: { doctor } })
    })
  }),
  withHandlers({
    onSubmit: ({ createDoctor, goBack }) => values =>
      createDoctor(values).then(goBack)
  })
)(DoctorForm)
