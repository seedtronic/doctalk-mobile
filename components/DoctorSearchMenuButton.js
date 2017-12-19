import React from "react"
import styled from "styled-components/native"
import { Button } from "native-base"
import { compose, withHandlers, withProps } from "recompose"
import withNavigate from "../lib/withNavigate"
import withIsCurrentRouteGetters from "../lib/withIsCurrentRouteGetters"

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

function DoctorSearchMenuButton({
  routeName,
  IconComponent,
  iconName,
  ...props
}) {
  const StyledIcon = styled(IconComponent)`
    color: ${({ active }) => (active ? "white" : "#2874F0")};
    font-size: 20;
  `
  return (
    <StyledButton {...props}>
      <StyledIcon name={iconName} active={props.active} />
    </StyledButton>
  )
}
