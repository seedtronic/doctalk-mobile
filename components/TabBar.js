import React from "react"
import { Footer, FooterTab } from "native-base"
import TabButton from "./TabButton"
import { withNavigation } from "react-navigation"

export default withNavigation(TabBar)

function TabBar({ navigation }) {
  return (
    <Footer>
      <FooterTab>
        <TabButton label="Consulta" routeName="DoctorsNavigator" />
        <TabButton label="Exame" routeName="ClinicsNavigator" />
        <TabButton label="Meus dados" routeName="UserNavigator" />
      </FooterTab>
    </Footer>
  )
}
