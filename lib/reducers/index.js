import currentPosition from "./currentPosition"
import map from "./map"
import navigation from "./navigation"
import session from "./session"

export default {
  currentPosition,
  map,
  navigation,
  session
}

export function resetState() {
  return { type: "RESET_STATE" }
}
