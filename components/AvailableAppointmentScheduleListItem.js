import React from "react"
import { View } from "react-native"
import styled from "styled-components/native"
import { ListItem, Text } from "native-base"
import { DateTime } from "luxon"
import CreateAppointmentButton from "./CreateAppointmentButton"

const Item = styled(ListItem)`
  margin-left: 15;
  align-content: space-between;
`
const Expand = styled.View`
  flex-grow: 1;
`

export default function AvailableAppointmentScheduleListItem({ item }) {
  return (
    <Item>
      <Text>
        {DateTime.fromISO(item.startedAt)
          .setZone("America/Sao_Paulo")
          .toLocaleString(DateTime.TIME_SIMPLE)}
      </Text>
      <Expand />
      <CreateAppointmentButton appointmentScheduleId={item.id} />
    </Item>
  )
}
