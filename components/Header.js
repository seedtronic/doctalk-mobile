import React from "react"
import styled from "styled-components/native"
import {
  Body,
  Header as NativeBaseHeader,
  Title,
  Left,
  Right
} from "native-base"

const TitleContainer = styled.View`
  margin-left: ${({ pullLeft }) => (pullLeft ? -20 : 0)};
  margin-right: ${({ pullRight }) => (pullRight ? -20 : 0)};
`

export default function Header({
  title,
  TitleComponent,
  LeftButton,
  RightButton
}) {
  return (
    <NativeBaseHeader>
      {renderButton(LeftButton, Left)}
      <Body>
        <TitleContainer pullLeft={!!LeftButton} pullRight={!!RightButton}>
          {renderTitle()}
        </TitleContainer>
      </Body>
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
