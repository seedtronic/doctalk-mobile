import React from "react"
import styled from "styled-components/native"
import ProfileInline from "./ProfileInline"
import Address from "./Address"

const Container = styled.View`
  flex-direction: column;
  width: 100%;
`

export default function DoctorProfileLite({ doctor }) {
  return (
    <Container>
      <ProfileInline
        key="0"
        subject={doctor}
        subtitle={doctor.specialty.title}
      />
      <Address key="1" address={doctor.address} />
    </Container>
  )
}
