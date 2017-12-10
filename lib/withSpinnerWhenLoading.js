import SpinnerView from "../components/SpinnerView"
import { branch, renderComponent } from "recompose"

export default function withSpinnerWhenLoading(loadingPropName) {
  return branch(props => !props[loadingPropName], renderComponent(SpinnerView))
}
