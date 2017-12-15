import React from "react"
import styled from "styled-components/native"

const Container = styled.TouchableHighlight.attrs({ underlayColor: "white" })`
  height: 30;
  align-self: center;
  border-radius: 5;
  flex-grow: 1;
`
const Button = styled.View`
  border-radius: 5;
  padding-top: 6;
  padding-bottom: 6;
  padding-left: 10;
  padding-right: 10;
  background-color: #007aff;
  border-color: #007aff;
  border-width: 0;
  flex-direction: row;
  elevation: 2;
  height: 30;
  opacity: 1;
  width: 100%;
  align-items: center;
`
const Wrapper = styled.View`
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
`

export default function FakeSmallButton({ children, onPress }) {
  return (
    <Container onPress={onPress}>
      <Button>
        <Wrapper>{children}</Wrapper>
      </Button>
    </Container>
  )
}
