import React from "react"
import styled from "styled-components/native"
import { Container, Header, Title, Left, Right, Body } from "native-base"

const Content = styled.View`
  flex: 1;
`

export default function({ title, RightButton, children }) {
  return (
    <Container>
      <Header>
        <Left />
        <Body style={{ flex: 4 }}>
          <Title>{title}</Title>
        </Body>
        <Right>{RightButton && <RightButton />}</Right>
      </Header>
      <Content>{children}</Content>
    </Container>
  )
}
