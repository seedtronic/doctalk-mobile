import React from "react"
import { Footer, FooterTab } from "native-base"
import TabButton from "./TabButton"

export default function TabBar() {
  return (
    <Footer>
      <FooterTab>
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
}
