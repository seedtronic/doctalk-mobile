import React from "react"
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
  const flex = 4 + (LeftButton ? 0 : 2) + (RightButton ? 0 : 2)
  return (
    <NativeBaseHeader>
      <Left>{LeftButton && <LeftButton />}</Left>
      <Body style={{ flex }}>{renderTitle()}</Body>
      <Right>{RightButton && <RightButton />}</Right>
    </NativeBaseHeader>
  )

  function renderTitle() {
    if (TitleComponent) {
      return <TitleComponent />
    } else {
      return <Title>{title}</Title>
    }
  }
}
