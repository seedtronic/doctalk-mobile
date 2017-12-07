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
          .setLocale("pt-BR")
          .toLocaleString(DateTime.DATETIME_MED)}
      </Text>
    </Item>
  )
}
