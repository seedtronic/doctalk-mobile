import { connect } from "react-redux"
import { graphql } from "react-apollo"
import { branch, compose, renderComponent } from "recompose"
import withOnCurrentScreen from "../lib/withOnCurrentScreen"
import withCurrentLocation from "../lib/withCurrentLocation"
import loadCurrentLocation from "../lib/loadCurrentLocation"
import SpinnerView from "./SpinnerView"
import doctorsQuery from "../graphql/doctorsQuery"
import { setCoords } from "../lib/reducers/currentPosition"
import { setLoading } from "../lib/reducers/doctorList"
import withWatchProp from "../lib/withWatchProp"
import DoctorList from "../components/DoctorList"

export default compose(
  withCurrentLocation("DoctorListScreen"),
  connect(
    ({ currentPosition: { coords }, map: { filter } }) => ({ coords, filter }),
    { setCoords }
  ),
  withOnCurrentScreen("DoctorListScreen", ({ setCoords }) =>
    loadCurrentLocation(setCoords)
  ),
  branch(({ coords }) => !coords, renderComponent(SpinnerView)),
  graphql(doctorsQuery, {
    props: ({ data: { loading, doctors } }) => ({
      loading,
      doctors: (doctors ? doctors.edges : []).map(({ node }) => node)
    }),
    options: ({ coords, filter }) => {
      return {
        fetchPolicy: "cache-and-network",
        variables: { coords, ...filter }
      }
    }
  }),
  connect(null, { setLoading }),
  withWatchProp("loading", ({ setLoading }) => setLoading)
)(DoctorList)
