import { composeResetReducer } from "redux-reset-store"

const SET_TOKEN = "session/SET_TOKEN"
const RESET = "session/RESET"

const initialState = {
  token: null
}

export default composeResetReducer(
  function(state = initialState, action) {
    switch (action.type) {
      case SET_TOKEN:
        const token = action.data
        return { ...state, token }
      default:
        return state
    }
  },
  initialState,
  RESET
)

export function setToken(token) {
  return {
    type: SET_TOKEN,
    data: token
  }
}

export function reset() {
  return {
    type: RESET
  }
}
