import React from "react"
import { compose } from "recompose"
import { Button, Text } from "native-base"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import withNavigate from "../lib/withNavigate"
import withCurrentRoute from "../lib/withCurrentRoute"
import includes from "lodash/includes"

export default compose(withNavigate, withCurrentRoute)(TabButton)

function TabButton({ routeName, iconName, label, navigate, currentRoutePath }) {
  const isCurrentRoute = includes(currentRoutePath, routeName)
  return (
    <Button onPress={navigate(routeName)} active={isCurrentRoute} vertical>
      <MaterialCommunityIcons
        name={iconName}
        size={22}
        style={{ color: isCurrentRoute ? "#2874F0" : null }}
      />
      <Text>{label}</Text>
    </Button>
  )
}
