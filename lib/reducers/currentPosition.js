import { composeResetReducer } from "redux-reset-store"

const RESET = "currentPosition/RESET"
const SET_COORDS = "currentPosition/SET_COORDS"
const SET_PERMISSION_GRANTED = "currentPosition/SET_PERMISSION_GRANTED"
const SET_PERMISSION_DENIED = "currentPosition/SET_PERMISSION_DENIED"
const SET_PERMISSION_GOT = "currentPosition/SET_PERMISSION_GOT"

const initialState = {
  coords: null,
  permissionGranted: false,
  permissionDenied: false,
  permissionVerified: false
}

export default composeResetReducer(function(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return initialState
    case SET_COORDS:
      const coords = action.data
      return { ...state, coords }
    case SET_PERMISSION_GRANTED:
      const permissionGranted = action.data
      return { ...state, permissionGranted }
    case SET_PERMISSION_DENIED:
      const permissionDenied = action.data
      return { ...state, permissionDenied }
    case SET_PERMISSION_GOT:
      const permissionGot = action.data
      return { ...state, permissionGot }
    default:
      return state
  }
}, initialState)

export function reset() {
  return { type: RESET }
}

export function setCoords(coords) {
  return {
    type: SET_COORDS,
    data: coords
  }
}

export function setPermissionGranted(permissionGranted) {
  return {
    type: SET_PERMISSION_GRANTED,
    data: permissionGranted
  }
}

export function setPermissionDenied(permissionDenied) {
  return {
    type: SET_PERMISSION_DENIED,
    data: permissionDenied
  }
}

export function setPermissionGot(permissionGot) {
  return {
    type: SET_PERMISSION_GOT,
    data: permissionGot
  }
}
