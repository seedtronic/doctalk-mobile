import React from "react"
import { connect } from "react-redux"
import { graphql } from "react-apollo"
import { MapView } from "expo"
import {
  branch,
  compose,
  lifecycle,
  renderComponent,
  withProps,
  withState
} from "recompose"
import MapDoctorPin from "./MapDoctorPin"
import SpinnerView from "./SpinnerView"
import doctorsQuery from "../graphql/doctorsQuery"
import { setRegion, setLoading } from "../lib/reducers/map"
import loadCurrentLocation from "../lib/loadCurrentLocation"
import withWatchProp from "../lib/withWatchProp"

export default compose(
  connect(({ map }) => ({ map }), { setRegion }),
  lifecycle({
    componentWillMount() {
      if (!this.props.map.region) {
        loadCurrentLocation(this.props.setRegion)
      }
    }
  }),
  branch(({ map }) => !map.region, renderComponent(SpinnerView)),
  graphql(doctorsQuery, {
    options: ({ map: { region, filter } }) => {
      return {
        fetchPolicy: "cache-and-network",
        variables: { region, ...filter }
      }
    }
  }),
  withProps(({ data: { loading, doctors } }) => {
    return {
      loading,
      doctors: (doctors ? doctors.edges : []).map(({ node }) => node)
    }
  }),
  connect(null, { setLoading }),
  withWatchProp("loading", ({ setLoading }) => setLoading),
  withState("localRegion", "setLocalRegion", ({ map: { region } }) => region)
)(Map)

function Map({ doctors, localRegion, setLocalRegion, setRegion }) {
  return (
    <MapView
      provider={MapView.PROVIDER_GOOGLE}
      style={{ flex: 1, flexGrow: 1 }}
      region={localRegion}
      onRegionChange={setLocalRegion}
      onRegionChangeComplete={setRegion}
      showsUserLocation
      showsMyLocationButton
    >
      {doctors.map(doctor => <MapDoctorPin key={doctor.id} doctor={doctor} />)}
    </MapView>
  )
}
