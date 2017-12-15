import { composeResetReducer } from "redux-reset-store"

const SET_LOADING = "doctors/SET_LOADING"
const SET_SPECIALTY = "doctors/SET_SPECIALTY"

const initialState = {
  loading: false,
  specialty: null
}

export default composeResetReducer(function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.data }
    case SET_SPECIALTY:
      return { ...state, specialty: action.data }
    default:
      return state
  }
}, initialState)

export function setLoading(loading) {
  const meta = loading ? {} : { debounce: { time: 1000 } }
  return {
    type: SET_LOADING,
    data: loading,
    meta
  }
}

export function setSpecialty(specialty) {
  return {
    type: SET_SPECIALTY,
    data: specialty
  }
}
