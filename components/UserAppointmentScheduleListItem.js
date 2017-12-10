import React from "react"
import styled from "styled-components/native"
import { ListItem, Text } from "native-base"
import { DateTime } from "luxon"
import DoctorProfileLite from "./DoctorProfileLite"

const Item = styled(ListItem)`
  flex-direction: column;
  padding-left: 10;
  padding-right: 10;
`
const Time = styled.View`
  align-self: flex-start;
  margin-bottom: 15;
`

export default function UserAppointmentScheduleListItem({ item }) {
  return (
    <Item>
      <Time>
        <Text>
          {DateTime.fromISO(item.startedAt)
            .setZone("America/Sao_Paulo")
            .toLocaleString(DateTime.TIME_SIMPLE)}
        </Text>
      </Time>
      <DoctorProfileLite doctor={item.doctor} mapHeight={200} />
    </Item>
  )
}
