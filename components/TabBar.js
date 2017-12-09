import React from "react"
import { Footer, FooterTab } from "native-base"
import TabButton from "./TabButton"
import withCurrentUser from "../lib/withCurrentUser"
import UserAgendaTabButton from "./UserAgendaTabButton"

export default withCurrentUser(false)(TabBar)

function TabBar({ currentUser }) {
  return (
    <Footer>
      <FooterTab>
        {renderDoctorAgenda()}
        <UserAgendaTabButton />
        <TabButton
          label="Consulta"
          iconName="stethoscope"
          routeName="DoctorsNavigator"
        />
        <TabButton
          label="Exame"
          iconName="hospital-building"
          routeName="ClinicsNavigator"
        />
        <TabButton
          label="Usuário"
          iconName="account-circle"
          routeName="UserNavigator"
        />
      </FooterTab>
    </Footer>
  )

  function renderDoctorAgenda() {
    if (currentUser && currentUser.doctor) {
      return (
        <TabButton
          label="Agenda"
          iconName="calendar"
          routeName="DoctorAgendaNavigator"
        />
      )
    }
  }
}
