import React from "react"
import { StackNavigator } from "react-navigation"
import MapScreen from "./screens/MapScreen"
import SearchScreen from "./screens/SearchScreen"
import DoctorScreen from "./screens/DoctorScreen"
import SearchButton from "./components/SearchButton"

const MainNavigator = StackNavigator({
  MapScreen: {
    screen: MapScreen,
    navigationOptions: {
      title: "Escolha um médico",
      headerRight: <SearchButton />
    }
  },
  DoctorScreen: { screen: DoctorScreen }
})

const SearchScreenNavigator = StackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions: {
      title: "Escolha uma especialidade"
    }
  }
})

export default StackNavigator(
  {
    MainNavigator: { screen: MainNavigator },
    SearchScreenNavigator: { screen: SearchScreenNavigator }
  },
  { headerMode: "none", mode: "modal" }
)
