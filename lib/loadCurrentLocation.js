import Expo from "expo"

export default function loadCurrentLocation(setCoords) {
  Expo.Location.getCurrentPositionAsync().then(result => {
    const { latitude, longitude } = result.coords
    setCoords({ latitude, longitude })
  })
}
