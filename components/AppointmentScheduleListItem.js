import React from "react"
import styled from "styled-components/native"
import { ListItem, Text } from "native-base"
import { DateTime } from "luxon"

const Item = styled(ListItem)`
  margin-left: 15;
`

export default function AppointmentScheduleListItem({ appointmentSchedule }) {
  return (
    <Item>
      <Text>
        {DateTime.fromISO(appointmentSchedule.startedAt)
          .setZone("America/Sao_Paulo")
          .toLocaleString(DateTime.TIME_SIMPLE)}
      </Text>
    </Item>
  )
}
