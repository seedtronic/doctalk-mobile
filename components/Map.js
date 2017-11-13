import React from "react"
import { connect } from "react-redux"
import { graphql } from "react-apollo"
import { MapView } from "expo"
import { compose, lifecycle, withProps } from "recompose"
import MapDoctorPin from "./MapDoctorPin"
import doctorsQuery from "../graphql/doctorsQuery"
import { setLoading } from "../lib/reducers/mapFilter"
import { setRegion } from "../lib/reducers/map"

export default compose(
  connect(null, { setRegion }),
  lifecycle({
    componentWillMount() {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) =>
          this.props.setRegion({ latitude, longitude })
      )
    }
  }),
  connect(({ mapFilter: { specialtyId } }) => ({ specialtyId })),
  graphql(doctorsQuery, {
    options: {
      fetchPolicy: "cache-and-network"
    }
  }),
  connect(null, { setLoading }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      nextProps.setLoading(nextProps.data.loading)
    }
  }),
  withProps(({ data: { doctors } }) => {
    return {
      doctors: (doctors ? doctors.edges : []).map(({ node }) => node)
    }
  }),
  connect(({ map: { region } }) => ({ region }))
)(Map)

function Map({ doctors, loading, setRegion, region }) {
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
