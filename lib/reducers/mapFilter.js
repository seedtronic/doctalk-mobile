const SET_SPECIALTY_ID = "mapFilter/SET_SPECIALTY_ID"

const initialState = {
  specialityId: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SPECIALTY_ID:
      return { ...state, specialityId: action.data }
    default:
      return state
  }
}

export function setSpecialtyId(specialityId) {
  return {
    type: SET_SPECIALTY_ID,
    data: specialityId
  }
}
