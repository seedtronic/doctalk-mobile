import { composeResetReducer } from "redux-reset-store"

const SET_USER = "session/SET_USER"

const initialState = {
  user: null
}

export default composeResetReducer(function(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      const user = action.data
      return { ...state, user }
    default:
      return state
  }
}, initialState)

export function setUser(user) {
  return {
    type: SET_USER,
    data: user
  }
}
