import { graphql } from "react-apollo"
import {
  branch,
  compose,
  renderComponent,
  withHandlers,
  withProps
} from "recompose"
import DoctorForm from "./DoctorForm"
import doctorQuery from "../graphql/doctorQuery"
import upsertDoctorMutation from "../graphql/upsertDoctorMutation"
import withNavigate from "../lib/withNavigate"
import withCurrentUser from "../lib/withCurrentUser"
import get from "lodash/get"
import omit from "lodash/omit"
import SpinnerView from "./SpinnerView"

export default compose(
  withCurrentUser(true),
  withProps(props => ({
    doctorId: get(props, "currentUser.doctor.id")
  })),
  graphql(doctorQuery, {
    props: props => {
      const { id, __typename, imageUrl, specialty, address, ...doctor } = get(
        props,
        "data.doctor",
        {}
      )
      return {
        initialValues: {
          specialtyId: get(specialty, "id"),
          address: omit(address, ["id", "__typename", "lat", "lng"]),
          ...doctor
        },
        loading: get(props, "data.loading", false)
      }
    },
    fetchPolicy: "network-only",
    skip: ({ doctorId }) => !doctorId
  }),
  branch(({ loading }) => loading, renderComponent(SpinnerView)),
  graphql(upsertDoctorMutation, {
    props: ({ mutate }) => ({
      upsertDoctor: doctor => mutate({ variables: { doctor } })
    })
  }),
  withNavigate,
  withHandlers({
    onSubmit: ({ upsertDoctor, goBack }) => values =>
      upsertDoctor(values).then(goBack)
  })
)(DoctorForm)
