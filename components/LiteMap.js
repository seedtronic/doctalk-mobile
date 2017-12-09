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
      moveOnMarkerPress={false}
      pitchEnabled={false}
      scrollEnabled={false}
      rotateEnabled={false}
      zoomEnabled={false}
      loadingEnabled
      cacheEnabled
      liteMode
      showsUserLocation
    >
      <MapView.Marker coordinate={{ latitude, longitude }} />
    </MapView>
  )
}
