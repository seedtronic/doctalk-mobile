import React from "react"
import { branch, compose, renderComponent } from "recompose"
import styled from "styled-components/native"
import { H1, H2 } from "native-base"
import SpinnerView from "./SpinnerView"
import ProfileImage from "./ProfileImage"

const Container = styled.View`
  flex-direction: row;
`

const TextContainer = styled.View`
  margin-left: 10;
`

export default compose(
  branch(({ subject }) => !subject, renderComponent(SpinnerView))
)(ProfileInline)

function ProfileInline({ subtitle, subject: { name, photoUrl } }) {
  return (
    <Container>
      <ProfileImage photoUrl={photoUrl} size={50} />
      <TextContainer>
        <H1>{name}</H1>
        <H2>{subtitle}</H2>
      </TextContainer>
    </Container>
  )
}
