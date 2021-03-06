import { composeResetReducer } from "redux-reset-store"

const SET_REGION = "map/SET_REGION"
const SET_LOADING = "map/SET_LOADING"

export const defaultDelta = {
  latitudeDelta: 0.03983533297015285,
  longitudeDelta: 0.0274658203125
}

const initialState = {
  region: null,
  zoom: null,
  loading: false
}

export default composeResetReducer(function(state = initialState, action) {
  switch (action.type) {
    case SET_REGION:
      if (action.data) {
        const region = { ...defaultDelta, ...state.region, ...action.data }
        return {
          ...state,
          region,
          zoom: zoom(region)
        }
      } else {
        return {
          ...state,
          region: null,
          zoom: null
        }
      }
    case SET_LOADING:
      return { ...state, loading: action.data }
    default:
      return state
  }
}, initialState)

export function setRegion(region) {
  return {
    type: SET_REGION,
    data: region
  }
}

export function setLoading(loading) {
  const meta = loading ? {} : { debounce: { time: 1000 } }
  return {
    type: SET_LOADING,
    data: loading,
    meta
  }
}

function zoom(region) {
  if (region) {
    return Math.round(Math.log(360 / region.longitudeDelta) / Math.LN2)
  } else {
    return null
  }
}
