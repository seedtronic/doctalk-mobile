import currentPosition from "./currentPosition"
import doctorList from "./doctorList"
import map from "./map"
import navigation from "./navigation"
import session from "./session"

export default {
  currentPosition,
  doctorList,
  map,
  navigation,
  session
}

export function resetState() {
  return { type: "RESET_STATE" }
}
