import React from "react"
import { compose } from "recompose"
import { Button, Text } from "native-base"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import withNavigate from "../lib/withNavigate"
import withIsCurrentRoute from "../lib/withIsCurrentRoute"

export default compose(withNavigate, withIsCurrentRoute)(TabButton)

function TabButton({ routeName, iconName, label, navigate, isCurrentRoute }) {
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
