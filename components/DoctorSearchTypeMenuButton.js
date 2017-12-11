import React from "react"
import { Button, Text } from "native-base"
import { compose, withHandlers, withProps } from "recompose"
import withNavigate from "../lib/withNavigate"
import withIsCurrentRouteGetters from "../lib/withIsCurrentRouteGetters"

export default compose(
  withIsCurrentRouteGetters,
  withProps(({ getIsCurrentRoutePath, routeName }) => ({
    active: getIsCurrentRoutePath(routeName)
  })),
  withNavigate,
  withHandlers({ onPress: ({ navigate, routeName }) => navigate(routeName) })
)(DoctorSearchTypeMenuButton)

function DoctorSearchTypeMenuButton({ label, routeName, ...props }) {
  return (
    <Button {...props}>
      <Text>{label}</Text>
    </Button>
  )
}
