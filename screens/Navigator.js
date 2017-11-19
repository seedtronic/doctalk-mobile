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
import UserScreen from "./UserScreen"
import TabBar from "../components/TabBar"

const DoctorsNavigator = StackNavigator(
  {
    DoctorsMapScreen: { screen: MapScreen },
    DoctorScreen: { screen: DoctorScreen }
  },
  { headerMode: "none" }
)

const ClinicsNavigator = StackNavigator(
  {
    ClinicsMapScreen: { screen: MapScreen }
  },
  { headerMode: "none" }
)

const UserNavigator = StackNavigator(
  {
    UserScreen: { screen: UserScreen }
  },
  { headerMode: "none" }
)

const MainNavigator = TabNavigator(
  {
    DoctorsNavigator: { screen: DoctorsNavigator },
    ClinicsNavigator: { screen: ClinicsNavigator },
    UserNavigator: { screen: UserNavigator }
  },
  {
    animationEnabled: true,
    initialRouteName: "DoctorsNavigator",
    tabBarComponent: TabBar
  }
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
