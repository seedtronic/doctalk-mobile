import { connect } from "react-redux"
import { graphql } from "react-apollo"
import { branch, compose, withHandlers, withProps } from "recompose"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import WideButton from "./WideButton"
import withNavigate from "../lib/withNavigate"
import currentUserQuery from "../graphql/currentUserQuery"
import doctorQuery from "../graphql/doctorQuery"
import get from "lodash/get"

const DisabledButton = compose(withProps({ disabled: true }))
const NewDoctorButton = compose(
  withHandlers({
    onPress: ({ navigate }) => navigate("NewDoctorScreen")
  })
)
const EditDoctorButton = compose(
  withProps({ label: "Editar meu perfil médico" }),
  withHandlers({
    onPress: ({ navigate }) => navigate("EditDoctorScreen")
  })
)

export default compose(
  connect(({ session: { token } }) => ({ token })),
  graphql(currentUserQuery, {
    props: props => ({ doctorId: get(props, "data.currentUser.id") }),
    skip: ({ token }) => !token
  }),
  graphql(doctorQuery, {
    props: ({ data: { doctor } }) => ({ doctor }),
    skip: ({ doctorId }) => !doctorId
  }),
  withProps(({ token, doctor }) => ({
    iconName: "stethoscope",
    IconProvider: MaterialCommunityIcons,
    label: "Cadastrar-me como médico",
    disabled: !token
  })),
  branch(({ token }) => !token, DisabledButton),
  withNavigate,
  branch(({ doctor }) => doctor, EditDoctorButton, NewDoctorButton)
)(WideButton)
