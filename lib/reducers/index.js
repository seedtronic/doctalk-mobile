import currentPosition from "./currentPosition"
import doctorList from "./doctorList"
import doctors from "./doctors"
import map from "./map"
import navigation from "./navigation"
import session from "./session"

export default {
  currentPosition,
  doctorList,
  doctors,
  map,
  navigation,
  session
}

export function resetState() {
  return { type: "RESET_STATE" }
}
