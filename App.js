import React from "react"
import { StackNavigator } from "react-navigation"
import Map from "./screens/Map"
import Search from "./screens/Search"
import SearchButton from "./components/SearchButton"

export default StackNavigator({
  Map: {
    screen: Map,
    navigationOptions: {
      title: "Escolha um médico",
      headerRight: <SearchButton />
    }
  },
  Search: { screen: Search }
})
