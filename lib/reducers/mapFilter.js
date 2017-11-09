const SET_SPECIALTY_ID = "mapFilter/SET_SPECIALTY_ID"
const SET_LOADING = "mapFilter/SET_LOADING"

const initialState = {
  specialtyId: null,
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SPECIALTY_ID:
      return { ...state, specialtyId: action.data }
    case SET_LOADING:
      return { ...state, loading: action.data }
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

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    data: loading
  }
}
