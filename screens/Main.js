import React from "react"
import { Root } from "native-base"
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

// const MapScreenNavigator = StackNavigator(
//   {
//     MapScreen: { screen: MapScreen }
//   },
//   { headerMode: "none" }
// )

const RootNavigator = StackNavigator(
  {
    MainNavigator: { screen: MainNavigator },
    SearchScreenNavigator: { screen: SearchScreenNavigator }
  },
  { headerMode: "none", mode: "modal" }
)

export default function App() {
  return (
    <Root>
      <RootNavigator />
    </Root>
  )
}
