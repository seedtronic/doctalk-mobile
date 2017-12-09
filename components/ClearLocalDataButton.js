import { connect } from "react-redux"
import { compose, withHandlers, withProps } from "recompose"
import { resetState } from "../lib/reducers"
import { reset as resetSession } from "../lib/reducers/session"
import WideButton from "./WideButton"
import { MaterialIcons } from "@expo/vector-icons"
import Expo from "expo"

export default compose(
  connect(null, { resetState, resetSession }),
  withHandlers({
    onPress: ({ resetState, resetSession }) => () => {
      resetState()
      resetSession()
      if (Expo.Constants.isDevice) {
        setTimeout(Expo.Util.reload, 500)
      }
    }
  }),
  withProps({
    iconName: "clear",
    IconProvider: MaterialIcons,
    label: "Limpar dados neste aparelho",
    danger: true
  })
)(WideButton)
