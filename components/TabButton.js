import React from "react"
import styled from "styled-components/native"
import { compose, withProps } from "recompose"
import { Button, Text } from "native-base"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import withNavigate from "../lib/withNavigate"
import withIsCurrentRouteGetters from "../lib/withIsCurrentRouteGetters"

const Label = styled(Text)`
  padding-left: 0;
  padding-right: 0;
`

export default compose(
  withNavigate,
  withIsCurrentRouteGetters,
  withProps(({ getIsCurrentRoutePath, routeName }) => ({
    isCurrentRoutePath: getIsCurrentRoutePath(routeName)
  }))
)(TabButton)

function TabButton({
  routeName,
  iconName,
  label,
  navigate,
  isCurrentRoutePath
}) {
  return (
    <Button onPress={navigate(routeName)} active={isCurrentRoutePath} vertical>
      <MaterialCommunityIcons
        name={iconName}
        size={22}
        style={{ color: isCurrentRoutePath ? "#2874F0" : null }}
      />
      <Label>{label}</Label>
    </Button>
  )
}
