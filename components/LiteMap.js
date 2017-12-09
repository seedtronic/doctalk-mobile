import React from "react"
import { MapView } from "expo"
import { defaultDelta } from "../lib/reducers/map"

export default function LiteMap({ latitude, longitude }) {
  const region = {
    latitude,
    longitude,
    ...defaultDelta
  }
  return (
    <MapView
      provider={MapView.PROVIDER_GOOGLE}
      style={{ flex: 1, flexGrow: 1 }}
      initialRegion={region}
      liteMode
      showsUserLocation
    >
      <MapView.Marker coordinate={{ latitude, longitude }} />
    </MapView>
  )
}
