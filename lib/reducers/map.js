import Expo from "expo"
import { composeResetReducer } from "redux-reset-store"

const SET_REGION = "map/SET_REGION"
const SET_LOADING = "map/SET_LOADING"
const UPDATE_FILTER_REGION = "map/UPDATE_FILTER_REGION"
const SET_FILTER_SPECIALTY_ID = "map/SET_FILTER_SPECIALTY_ID"

const defaultDelta = {
  latitudeDelta: 0.03983533297015285,
  longitudeDelta: 0.0274658203125
}

const initialRegion = !Expo.Constants.isDevice
  ? {
      latitude: -22.94732971278504,
      longitude: -43.17756671458483,
      ...defaultDelta
    }
  : null

const initialState = {
  region: initialRegion,
  zoom: zoom(initialRegion),
  loading: false,
  filter: {
    region: initialRegion,
    specialtyId: null
  }
}

export default composeResetReducer(function(state = initialState, action) {
  switch (action.type) {
    case SET_REGION:
      const region = { ...defaultDelta, ...state.region, ...action.data }
      return {
        ...state,
        region,
        zoom: zoom(region)
      }
    case SET_LOADING:
      return { ...state, loading: action.data }
    case UPDATE_FILTER_REGION:
      return { ...state, filter: { ...state.filter, region: state.region } }
    case SET_FILTER_SPECIALTY_ID:
      const specialtyId = action.data
      return { ...state, filter: { ...state.filter, specialtyId } }
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

export function updateFilterRegion() {
  return {
    type: UPDATE_FILTER_REGION,
    meta: {
      debounce: { time: 250 }
    }
  }
}

export function setFilterSpecialtyId(specialtyId) {
  return {
    type: SET_FILTER_SPECIALTY_ID,
    data: specialtyId
  }
}

function zoom(region) {
  if (region) {
    return Math.round(Math.log(360 / region.longitudeDelta) / Math.LN2)
  } else {
    return null
  }
}
