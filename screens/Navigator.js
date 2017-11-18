import { connect } from "react-redux"
import { compose, mapProps } from "recompose"
import { addNavigationHelpers, StackNavigator } from "react-navigation"
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

export const ModalStack = StackNavigator(
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
)(ModalStack)
