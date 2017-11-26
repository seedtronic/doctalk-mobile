import { compose, withHandlers } from "recompose"
import withNavigate from "../lib/withNavigate"
import CloseButton from "./CloseButton"

export default compose(
  withNavigate,
  withHandlers({ onPress: ({ goBack }) => goBack })
)(CloseButton)
