import { connect } from "react-redux"
import { compose, withHandlers, withProps } from "recompose"
import { setToken } from "../lib/reducers/session"
import { Octicons } from "@expo/vector-icons"
import WideButton from "./WideButton"

export default compose(
  connect(null, { setToken }),
  withProps({
    iconName: "sign-out",
    IconProvider: Octicons,
    label: "Sair",
    light: true
  }),
  withHandlers({
    onPress: ({ setToken }) => () => setToken(null)
  })
)(WideButton)
