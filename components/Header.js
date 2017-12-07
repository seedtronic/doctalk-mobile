import React from "react"
import styled from "styled-components/native"
import {
  Body,
  Header as NativeBaseHeader,
  Title,
  Left,
  Right
} from "native-base"

export default function Header({
  title,
  TitleComponent,
  LeftButton,
  RightButton
}) {
  return (
    <NativeBaseHeader>
      {renderButton(LeftButton, Left)}
      <Body>{renderTitle()}</Body>
      {renderButton(RightButton, Right)}
    </NativeBaseHeader>
  )

  function renderButton(Button, Wrapper) {
    if (Button) {
      const StyledWrapper = styled(Wrapper)`
        flex-basis: 22;
        flex-grow: 0;
      `
      return (
        <StyledWrapper>
          <Button />
        </StyledWrapper>
      )
    }
  }

  function renderTitle() {
    if (TitleComponent) {
      return <TitleComponent />
    } else {
      return <Title>{title}</Title>
    }
  }
}
