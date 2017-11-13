const SET_REGION = "map/SET_REGION"

const initialState = {
  region: {
    latitude: -22.944429,
    longitude: -43.162029,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_REGION:
      const region = { ...state.region, ...action.data }
      const zoom = Math.round(Math.log(360 / region.longitudeDelta) / Math.LN2)
      return {
        ...state,
        region,
        zoom
      }
    default:
      return state
  }
}

export function setRegion(region) {
  return {
    type: SET_REGION,
    data: region
  }
}
