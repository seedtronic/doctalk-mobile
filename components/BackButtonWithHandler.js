import { compose, withHandlers } from "recompose"
import withNavigate from "../lib/withNavigate"
import BackButton from "./BackButton"

export default compose(
  withNavigate,
  withHandlers({ onPress: ({ goBack }) => goBack })
)(BackButton)
