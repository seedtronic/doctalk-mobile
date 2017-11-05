const SET_SPECIALTY_ID = "mapFilter/SET_SPECIALTY_ID"

const initialState = {
  specialtyId: 1
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SPECIALTY_ID:
      return { ...state, specialtyId: action.data }
    default:
      return state
  }
}

export function setSpecialtyId(specialtyId) {
  return {
    type: SET_SPECIALTY_ID,
    data: specialtyId
  }
}
