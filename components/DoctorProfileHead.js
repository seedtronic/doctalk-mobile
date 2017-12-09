import React from "react"
import styled from "styled-components/native"
import DoctorProfile from "./DoctorProfile"
import { H2 } from "native-base"

const Subtitle = styled(H2)`
  margin-top: 30;
  text-align: center;
`

export default function DoctorProfileHead({ doctor, appointmentSchedules }) {
  return [
    <DoctorProfile key="0" doctor={doctor} />,
    <Subtitle key="1">
      {appointmentSchedules && appointmentSchedules.length === 0
        ? "Não há horários disponíveis"
        : "Horários disponíveis"}
    </Subtitle>
  ]
}
