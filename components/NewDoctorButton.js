import { compose, withHandlers, withProps } from "recompose"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import WideButton from "./WideButton"
import withNavigate from "../lib/withNavigate"

export default compose(
  withNavigate,
  withProps(({ loading }) => ({
    iconName: "stethoscope",
    IconProvider: MaterialCommunityIcons,
    label: "Cadastrar-me como médico"
  })),
  withHandlers({
    onPress: ({ navigate }) => () => navigate("NewDoctor")
  })
)(WideButton)
