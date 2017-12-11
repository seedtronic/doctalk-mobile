import React from "react"
import { Button, Text } from "native-base"
import { compose, withHandlers } from "recompose"
import withNavigate from "../lib/withNavigate"

export default compose(
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
