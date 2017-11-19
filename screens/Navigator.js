import { connect } from "react-redux"
import { compose, mapProps } from "recompose"
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator
} from "react-navigation"
import DoctorsScreen from "./DoctorsScreen"
import SearchScreen from "./SearchScreen"
import ClinicsScreen from "./ClinicsScreen"
import DoctorScreen from "./DoctorScreen"
import ShareLocationScreen from "./ShareLocationScreen"
import SplashScreen from "./SplashScreen"
import UserScreen from "./UserScreen"
import TabBar from "../components/TabBar"

const DoctorsNavigator = StackNavigator(
  {
    DoctorsScreen: { screen: DoctorsScreen }
  },
  { headerMode: "none" }
)

const ClinicsNavigator = StackNavigator(
  {
    ClinicsScreen: { screen: ClinicsScreen }
  },
  { headerMode: "none" }
)

const UserNavigator = StackNavigator(
  {
    UserScreen: { screen: UserScreen }
  },
  { headerMode: "none" }
)

const SectionsNavigator = TabNavigator(
  {
    DoctorsNavigator: { screen: DoctorsNavigator },
    ClinicsNavigator: { screen: ClinicsNavigator },
    UserNavigator: { screen: UserNavigator }
  },
  {
    animationEnabled: true,
    initialRouteName: "DoctorsNavigator",
    lazy: true,
    tabBarComponent: TabBar
  }
)

const MainNavigator = StackNavigator(
  {
    SectionsNavigator: { screen: SectionsNavigator },
    DoctorScreen: { screen: DoctorScreen }
  },
  { headerMode: "none" }
)

const WizardNavigator = StackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    ShareLocationScreen: { screen: ShareLocationScreen }
  },
  { headerMode: "none" }
)

const StageNavigator = TabNavigator(
  {
    WizardNavigator: { screen: WizardNavigator },
    MainNavigator: { screen: MainNavigator }
  },
  {
    animationEnabled: true,
    lazy: true,
    navigationOptions: {
      tabBarVisible: false
    }
  }
)

export const RootNavigator = StackNavigator(
  {
    StageNavigator: { screen: StageNavigator },
    SearchScreen: { screen: SearchScreen }
  },
  { headerMode: "none", mode: "modal" }
)

export default compose(
  connect(state => ({ state: state.navigation })),
  mapProps(({ dispatch, state }) => ({
    navigation: addNavigationHelpers({ dispatch, state })
  }))
)(RootNavigator)
