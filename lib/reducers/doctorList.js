import { composeResetReducer } from "redux-reset-store"

const SET_LOADING = "doctorList/SET_LOADING"

const initialState = {
  loading: false
}

export default composeResetReducer(function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.data }
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
