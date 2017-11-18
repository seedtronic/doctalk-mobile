import { StackNavigator } from "react-navigation"
import MapScreen from "./MapScreen"
import SearchScreen from "./SearchScreen"
import DoctorScreen from "./DoctorScreen"

const MainNavigator = StackNavigator(
  {
    MapScreen: { screen: MapScreen },
    DoctorScreen: { screen: DoctorScreen }
  },
  { headerMode: "none" }
)

const SearchScreenNavigator = StackNavigator(
  {
    SearchScreen: { screen: SearchScreen }
  },
  { headerMode: "none" }
)

export default StackNavigator(
  {
    MainNavigator: { screen: MainNavigator },
    SearchScreenNavigator: { screen: SearchScreenNavigator }
  },
  { headerMode: "none", mode: "modal" }
)
