import React from "react"
import { Button, Text } from "native-base"
import { withNavigation } from "react-navigation"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default withNavigation(TabButton)

function TabButton({ routeName, iconName, label, navigation }) {
  const currentRoute = navigation.state.routes[navigation.state.index].key
  const isCurrentRoute = routeName === currentRoute
  return (
    <Button onPress={onPress} active={isCurrentRoute} vertical>
      <MaterialCommunityIcons
        name={iconName}
        size={22}
        style={{ color: isCurrentRoute ? "#2874F0" : null }}
      />
      <Text>{label}</Text>
    </Button>
  )

  function onPress() {
    navigation.navigate(routeName)
  }
}
