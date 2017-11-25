import { connect } from "react-redux"
import { compose, withProps } from "recompose"
import { resetState } from "../lib/reducers"
import WideButton from "./WideButton"
import { MaterialIcons } from "@expo/vector-icons"

export default compose(
  connect(null, { onPress: resetState }),
  withProps({
    iconName: "clear",
    IconProvider: MaterialIcons,
    label: "Limpar dados neste aparelho",
    danger: true
  })
)(WideButton)
