import React from "react"
import styled from "styled-components/native"
import { Body, Header, Title, Left, Right } from "native-base"

const Content = styled.View`
  flex: 1;
`

export default function({
  title,
  TitleComponent,
  LeftButton,
  RightButton,
  children
}) {
  return [
    <Header>
      <Left>{LeftButton && <LeftButton />}</Left>
      <Body style={{ flex: 4 }}>{renderTitle()}</Body>
      <Right>{RightButton && <RightButton />}</Right>
    </Header>,
    <Content>{children}</Content>
  ]

  function renderTitle() {
    if (TitleComponent) {
      return <TitleComponent />
    } else {
      return <Title>{title}</Title>
    }
  }
}
