import { connect } from "react-redux"
import { compose, withHandlers, withProps } from "recompose"
import { setUser } from "../lib/reducers/session"
import { Octicons } from "@expo/vector-icons"
import WideButton from "./WideButton"

export default compose(
  connect(null, { setUser }),
  withProps({
    iconName: "sign-out",
    IconProvider: Octicons,
    label: "Sair",
    light: true
  }),
  withHandlers({
    onPress: ({ setUser }) => () => setUser(null)
  })
)(WideButton)
