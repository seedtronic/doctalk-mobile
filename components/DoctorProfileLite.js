import React from "react"
import styled from "styled-components/native"
import ProfileInline from "./ProfileInline"
import Address from "./Address"

const Container = styled.View`
  flex-direction: column;
`

export default function DoctorProfile({ doctor }) {
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
