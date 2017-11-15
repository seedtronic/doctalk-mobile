import Expo from "expo"

const SET_REGION = "map/SET_REGION"

const initialRegion = Expo.Constants.isDevice
  ? {
      latitude: -22.94732971278504,
      longitude: -43.17756671458483,
      latitudeDelta: 0.03983533297015285,
      longitudeDelta: 0.0274658203125
    }
  : null

const initialState = {
  region: initialRegion,
  zoom: zoom(initialRegion)
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_REGION:
      const region = { ...state.region, ...action.data }
      return {
        ...state,
        region,
        zoom: zoom(region)
      }
    default:
      return state
  }
}

export function setRegion(region) {
  return {
    type: SET_REGION,
    data: region,
    meta: { debounce: { time: 500 } }
  }
}

function zoom(region) {
  if (region) {
    return Math.round(Math.log(360 / region.longitudeDelta) / Math.LN2)
  } else {
    return null
  }
}
