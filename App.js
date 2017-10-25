import React from "react"
import { StackNavigator } from "react-navigation"
import MapScreen from "./screens/MapScreen"
import SearchScreen from "./screens/SearchScreen"
import DoctorScreen from "./screens/DoctorScreen"
import SearchButton from "./components/SearchButton"

export default StackNavigator({
  MapScreen: {
    screen: MapScreen,
    navigationOptions: {
      title: "Escolha um médico",
      headerRight: <SearchButton />
    }
  },
  SearchScreen: { screen: SearchScreen },
  DoctorScreen: { screen: DoctorScreen }
})
