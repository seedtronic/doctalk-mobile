import { connect } from "react-redux"
import { branch, compose, renderComponent } from "recompose"
import SmallDoctorMarker from "./SmallDoctorMarker"
import PhotoDoctorMarker from "./PhotoDoctorMarker"
import FullDoctorMarker from "./FullDoctorMarker"
import Spinner from "./Spinner"

export default compose(
  branch(({ pressed }) => pressed, renderComponent(Spinner)),
  connect(({ map: { zoom } }) => ({ zoom })),
  branch(({ zoom }) => zoom <= 13, renderComponent(SmallDoctorMarker)),
  branch(({ zoom }) => zoom <= 16, renderComponent(PhotoDoctorMarker))
)(FullDoctorMarker)
