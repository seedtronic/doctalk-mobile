import map from "./map"
import navigation from "./navigation"

export default {
  map,
  navigation
}

export function resetState() {
  return { type: "RESET_STATE" }
}
