import { connect } from "react-redux"
import { compose, mapProps } from "recompose"
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator
} from "react-navigation"
import AppointmentTypeScreen from "./AppointmentTypeScreen"
import SearchScreen from "./SearchScreen"
import DoctorSearchByListScreen from "./DoctorSearchByListScreen"
import DoctorSearchByMapScreen from "./DoctorSearchByMapScreen"
import ClinicsScreen from "./ClinicsScreen"
import DoctorScreen from "./DoctorScreen"
import ShareLocationScreen from "./ShareLocationScreen"
import SplashScreen from "./SplashScreen"
import UserScreen from "./UserScreen"
import EditDoctorScreen from "./EditDoctorScreen"
import DoctorAgendaScreen from "./DoctorAgendaScreen"
import UserAgendaScreen from "./UserAgendaScreen"
import NewAppointmentScheduleScreen from "./NewAppointmentScheduleScreen"
import TabBar from "../components/TabBar"
import None from "../components/None"

const DoctorAgendaNavigator = StackNavigator(
  {
    DoctorAgendaScreen: { screen: DoctorAgendaScreen }
  },
  { headerMode: "none" }
)

const UserAgendaNavigator = StackNavigator(
  {
    UserAgendaScreen: { screen: UserAgendaScreen }
  },
  { headerMode: "none" }
)

const DoctorSearchNavigator = TabNavigator(
  {
    DoctorSearchByListScreen: { screen: DoctorSearchByListScreen },
    DoctorSearchByMapScreen: { screen: DoctorSearchByMapScreen }
  },
  {
    animationEnabled: true,
    tabBarPosition: "top",
    initialRouteName: "DoctorSearchByListScreen",
    lazy: true,
    tabBarComponent: None
  }
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
    DoctorAgendaNavigator: { screen: DoctorAgendaNavigator },
    UserAgendaNavigator: { screen: UserAgendaNavigator },
    DoctorSearchNavigator: { screen: DoctorSearchNavigator },
    ClinicsNavigator: { screen: ClinicsNavigator },
    UserNavigator: { screen: UserNavigator }
  },
  {
    animationEnabled: true,
    initialRouteName: "DoctorSearchNavigator",
    lazy: true,
    tabBarComponent: TabBar
  }
)

const MainNavigator = StackNavigator(
  {
    SectionsNavigator: { screen: SectionsNavigator },
    DoctorScreen: { screen: DoctorScreen },
    EditDoctorScreen: { screen: EditDoctorScreen },
    NewAppointmentScheduleScreen: { screen: NewAppointmentScheduleScreen }
  },
  { headerMode: "none" }
)

const WizardNavigator = StackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    ShareLocationScreen: { screen: ShareLocationScreen },
    AppointmentTypeScreen: { screen: AppointmentTypeScreen }
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
