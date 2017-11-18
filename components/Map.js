import React from "react"
import { connect } from "react-redux"
import { graphql } from "react-apollo"
import { MapView } from "expo"
import {
  branch,
  compose,
  lifecycle,
  renderComponent,
  withHandlers,
  withProps,
  withState
} from "recompose"
import MapDoctorPin from "./MapDoctorPin"
import SpinnerView from "./SpinnerView"
import doctorsQuery from "../graphql/doctorsQuery"
import { setRegion, updateFilterRegion, setLoading } from "../lib/reducers/map"

export default compose(
  connect(({ map }) => ({ map }), { setRegion, updateFilterRegion }),
  withProps(({ setRegion, updateFilterRegion }) => ({
    setRegion: region => {
      setRegion(region)
      updateFilterRegion()
    }
  })),
  lifecycle({
    componentWillMount() {
      if (!this.props.map.region) {
        navigator.geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) =>
            this.props.setRegion({ latitude, longitude })
        )
      }
    }
  }),
  branch(({ map }) => !map.region, renderComponent(SpinnerView)),
  branch(({ map }) => !map.filter.region, renderComponent(SpinnerView)),
  graphql(doctorsQuery, {
    options: ({ map: { filter } }) => {
      return {
        fetchPolicy: "cache-and-network",
        variables: filter
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
  withState("mapReady", "setMapReady", false),
  lifecycle({
    componentWillMount() {
      setTimeout(() => this.setState({ mapReady: true }), 100)
    },
    componentWillReceiveProps(nextProps) {
      if (this.props.loading !== nextProps.loading) {
        nextProps.setLoading(nextProps.data.loading)
      }
    }
  }),
  withHandlers({
    setRegion: ({ mapReady, setRegion }) => region =>
      mapReady && setRegion(region)
  })
)(Map)

function Map({ doctors, setRegion, map: { region } }) {
  return (
    <MapView
      provider={MapView.PROVIDER_GOOGLE}
      style={{ flex: 1, flexGrow: 1 }}
      showsUserLocation={true}
      region={region}
      onRegionChange={setRegion}
    >
      {doctors.map(doctor => <MapDoctorPin key={doctor.id} doctor={doctor} />)}
    </MapView>
  )
}
