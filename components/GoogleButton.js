import { compose, withProps } from "recompose"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import WideButton from "./WideButton"
import withGoogleLogin from "../lib/withGoogleLogin"

export default compose(
  withGoogleLogin,
  withProps(({ loading }) => ({
    iconName: "google",
    IconProvider: MaterialCommunityIcons,
    label: "Entrar com o Google",
    loading
  }))
)(WideButton)
