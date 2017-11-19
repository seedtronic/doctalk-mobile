import { connect } from "react-redux"
import { compose, mapProps } from "recompose"
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator
} from "react-navigation"
import MapScreen from "./MapScreen"
import SearchScreen from "./SearchScreen"
import DoctorScreen from "./DoctorScreen"
import TabBar from "../components/TabBar"

const DoctorsNavigator = StackNavigator(
  {
    MapScreen: { screen: MapScreen },
    DoctorScreen: { screen: DoctorScreen }
  },
  {
    headerMode: "none"
  }
)

const MainNavigator = TabNavigator(
  {
    DoctorsScreen: { screen: DoctorsNavigator }
  },
  { initialRouteName: "DoctorsScreen", tabBarComponent: TabBar }
)

const SearchScreenNavigator = StackNavigator(
  {
    SearchScreen: { screen: SearchScreen }
  },
  { headerMode: "none" }
)

export const RootNavigator = StackNavigator(
  {
    MainNavigator: { screen: MainNavigator },
    SearchScreenNavigator: { screen: SearchScreenNavigator }
  },
  { headerMode: "none", mode: "modal" }
)

export default compose(
  connect(state => ({ state: state.navigation })),
  mapProps(({ dispatch, state }) => ({
    navigation: addNavigationHelpers({ dispatch, state })
  }))
)(RootNavigator)
