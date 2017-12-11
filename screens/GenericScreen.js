import React from "react"
import styled from "styled-components/native"
import Header from "../components/Header"

const Content = styled.View`
  flex: 1;
`

export default function({
  title,
  TitleComponent,
  LeftButton,
  RightButton,
  HeaderTabs,
  children
}) {
  return [
    <Header
      key="0"
      title={title}
      TitleComponent={TitleComponent}
      LeftButton={LeftButton}
      RightButton={RightButton}
      Tabs={HeaderTabs}
    />,
    <Content key="1">{children}</Content>
  ]
}
