import { branch, compose, renderComponent, withProps } from "recompose"
import List from "./List"
import SpinnerView from "./SpinnerView"
import DoctorListItem from "./DoctorListItem"

export default compose(
  branch(({ doctors }) => !doctors, renderComponent(SpinnerView)),
  withProps(({ doctors }) => ({
    items: doctors,
    ListItem: DoctorListItem
  }))
)(List)
