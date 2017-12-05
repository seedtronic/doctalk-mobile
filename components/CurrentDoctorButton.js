import { graphql } from "react-apollo"
import { branch, compose, withHandlers, withProps } from "recompose"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import WideButton from "./WideButton"
import withNavigate from "../lib/withNavigate"
import doctorQuery from "../graphql/doctorQuery"
import get from "lodash/get"
import withCurrentUser from "../lib/withCurrentUser"

const DisabledButton = compose(withProps({ disabled: true }))
const NewDoctorButton = compose(
  withHandlers({
    onPress: ({ navigate }) => navigate("EditDoctorScreen")
  })
)
const EditDoctorButton = compose(
  withProps({ label: "Editar meu perfil médico" }),
  withHandlers({
    onPress: ({ navigate }) => navigate("EditDoctorScreen")
  })
)

export default compose(
  withCurrentUser(false),
  withProps(props => ({ doctorId: get(props, "currentUser.doctor.id") })),
  graphql(doctorQuery, {
    props: ({ data: { doctor } }) => ({ doctor }),
    skip: ({ doctorId }) => !doctorId
  }),
  withProps(({ currentUser, doctor }) => ({
    iconName: "stethoscope",
    IconProvider: MaterialCommunityIcons,
    label: "Cadastrar-me como médico",
    disabled: !currentUser
  })),
  branch(({ currentUser }) => !currentUser, DisabledButton),
  withNavigate,
  branch(({ doctor }) => doctor, EditDoctorButton, NewDoctorButton)
)(WideButton)
