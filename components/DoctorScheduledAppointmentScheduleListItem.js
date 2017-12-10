import React from "react"
import styled from "styled-components/native"
import { ListItem, Text } from "native-base"
import { DateTime } from "luxon"
import ListItemProfile from "./ListItemProfile"

const Item = styled(ListItem)`
  margin-left: 15;
`
const ProfileContainer = styled.View`
  margin-left: 10;
`

export default function DoctorScheduleAppointmentScheduleListItem({
  appointmentSchedule
}) {
  return (
    <Item>
      <Text>
        {DateTime.fromISO(appointmentSchedule.startedAt)
          .setZone("America/Sao_Paulo")
          .toLocaleString(DateTime.TIME_SIMPLE)}
      </Text>
      <ProfileContainer>
        <ListItemProfile subject={appointmentSchedule.appointment.user} />
      </ProfileContainer>
    </Item>
  )
}
