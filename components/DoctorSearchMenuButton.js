import React from "react"
import styled from "styled-components/native"
import { Button, Text } from "native-base"
import { compose, withHandlers, withProps } from "recompose"
import withNavigate from "../lib/withNavigate"
import withIsCurrentRouteGetters from "../lib/withIsCurrentRouteGetters"

const Label = styled(Text)`
  font-size: 12;
  padding-left: 0;
  padding-right: 0;
`
const StyledButton = styled(Button)`
  padding-left: 10;
  padding-right: 10;
`

export default compose(
  withIsCurrentRouteGetters,
  withProps(({ getIsCurrentRoutePath, routeName }) => ({
    active: getIsCurrentRoutePath(routeName)
  })),
  withNavigate,
  withHandlers({ onPress: ({ navigate, routeName }) => navigate(routeName) })
)(DoctorSearchMenuButton)

function DoctorSearchMenuButton({ label, routeName, ...props }) {
  return (
    <StyledButton {...props}>
      <Label>{label}</Label>
    </StyledButton>
  )
}
