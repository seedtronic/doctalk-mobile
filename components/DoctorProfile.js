import React from "react"
import styled from "styled-components/native"
import Profile from "./Profile"
import Address from "./Address"

const Container = styled.View`
  flex-direction: column;
`

export default function DoctorProfile({ doctor }) {
  return (
    <Container>
      <Profile key="0" subject={doctor} />
      <Address key="1" address={doctor.address} mapHeight={200} block />
    </Container>
  )
}
