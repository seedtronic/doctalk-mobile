import React from "react"
import { ListView } from "react-native"
import { graphql } from "react-apollo"
import { branch, compose, renderComponent } from "recompose"
import appointmentSchedulesQuery from "../graphql/appointmentSchedulesQuery"
import { Button, Icon, List } from "native-base"
import SpinnerView from "./SpinnerView"
import AppointmentScheduleListItem from "./AppointmentScheduleListItem"

export default compose(
  graphql(appointmentSchedulesQuery, {
    props: ({ data: { loading, appointmentSchedules } }) => ({
      loading,
      appointmentSchedules: appointmentSchedules
        ? appointmentSchedules.edges.map(({ node }) => node)
        : null
    })
  }),
  branch(({ loading }) => loading, renderComponent(SpinnerView))
)(AppointmentScheduleList)

function AppointmentScheduleList({ appointmentSchedules }) {
  const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  }).cloneWithRows(appointmentSchedules)
  return (
    <List
      dataSource={dataSource}
      renderRow={renderRow}
      renderLeftHiddenRow={() => null}
      renderRightHiddenRow={renderRightHiddenRow}
      disableRightSwipe={true}
      leftOpenValue={75}
      rightOpenValue={-75}
      enableEmptySections={true}
    />
  )
}

function renderRow(appointmentSchedule) {
  return (
    <AppointmentScheduleListItem
      key={appointmentSchedule.id}
      appointmentSchedule={appointmentSchedule}
    />
  )
}

function renderRightHiddenRow(appointmentSchedule) {
  return (
    <Button full danger>
      <Icon active name="trash" />
    </Button>
  )
}
