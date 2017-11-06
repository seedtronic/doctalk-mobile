import React from "react"
import styled from "styled-components/native"
import { Container, Header, Title, Left, Right, Body } from "native-base"

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
  return (
    <Container>
      <Header>
        <Left>{LeftButton && <LeftButton />}</Left>
        <Body style={{ flex: 4 }}>{renderTitle()}</Body>
        <Right>{RightButton && <RightButton />}</Right>
      </Header>
      <Content>{children}</Content>
    </Container>
  )

  function renderTitle() {
    if (TitleComponent) {
      return <TitleComponent />
    } else {
      return <Title>{title}</Title>
    }
  }
}
