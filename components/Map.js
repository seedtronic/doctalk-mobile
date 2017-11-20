import React from "react"
import { connect } from "react-redux"
import { graphql } from "react-apollo"
import Expo, { MapView } from "expo"
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

export default compose(
  connect(({ map }) => ({ map }), { setRegion }),
  lifecycle({
    componentWillMount() {
      if (!this.props.map.region) {
        loadCurrentLocation(this.props)
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
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (this.props.loading !== nextProps.loading) {
        nextProps.setLoading(nextProps.loading)
      }
    }
  }),
  withState("localRegion", "setLocalRegion", ({ map: { region } }) => region)
)(Map)

function Map({ doctors, localRegion, setLocalRegion, setRegion }) {
  return (
    <MapView
      provider={MapView.PROVIDER_GOOGLE}
      style={{ flex: 1, flexGrow: 1 }}
      showsUserLocation={true}
      region={localRegion}
      onRegionChange={setLocalRegion}
      onRegionChangeComplete={setRegion}
    >
      {doctors.map(doctor => <MapDoctorPin key={doctor.id} doctor={doctor} />)}
    </MapView>
  )
}

async function loadCurrentLocation(props) {
  const result = await Expo.Location.getCurrentPositionAsync()
  const { latitude, longitude } = result.coords
  props.setRegion({ latitude, longitude })
}
