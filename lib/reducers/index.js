import currentPosition from "./currentPosition"
import map from "./map"
import navigation from "./navigation"

export default {
  currentPosition,
  map,
  navigation
}

export function resetState() {
  return { type: "RESET_STATE" }
}
