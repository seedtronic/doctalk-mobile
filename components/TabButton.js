import React from "react"
import { Button, Text } from "native-base"
import { withNavigation } from "react-navigation"

export default withNavigation(TabButton)

function TabButton({ routeName, label, navigation }) {
  const currentRoute = navigation.state.routes[navigation.state.index].key
  const isCurrentRoute = routeName === currentRoute
  return (
    <Button onPress={onPress} active={isCurrentRoute}>
      <Text>{label}</Text>
    </Button>
  )

  function onPress() {
    navigation.navigate(routeName)
  }
}
