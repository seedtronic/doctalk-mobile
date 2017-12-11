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
const TabsContainer = styled.View`
  border-bottom-width: 0.5;
  border-bottom-color: #a7a6ab;
  elevation: 3;
  margin-top: -10;
`

export default function Header({
  title,
  TitleComponent,
  LeftButton,
  RightButton,
  Tabs
}) {
  return [
    <NativeBaseHeader key="0" hasTabs={!!Tabs}>
      {renderButton(LeftButton, Left)}
      <Body>
        <TitleContainer pullLeft={!!LeftButton} pullRight={!!RightButton}>
          {renderTitle()}
        </TitleContainer>
      </Body>
      {renderButton(RightButton, Right)}
    </NativeBaseHeader>,
    Tabs && (
      <TabsContainer key="1">
        <Tabs />
      </TabsContainer>
    )
  ]

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
