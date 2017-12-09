import React from "react"
import styled from "styled-components/native"
import DoctorProfile from "./DoctorProfile"
import { H3 } from "native-base"

const Subtitle = styled(H3)`
  margin-top: 20;
  text-align: center;
`

export default function DoctorProfileHead({ doctor }) {
  return [
    <DoctorProfile key="0" doctor={doctor} />,
    <Subtitle key="1">Horários disponíveis</Subtitle>
  ]
}
