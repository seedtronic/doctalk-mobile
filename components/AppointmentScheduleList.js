import React from "react"
import { ListView } from "react-native"
import { graphql } from "react-apollo"
import { branch, compose, renderComponent, withProps } from "recompose"
import appointmentSchedulesQuery from "../graphql/appointmentSchedulesQuery"
import { List } from "native-base"
import SpinnerView from "./SpinnerView"
import AppointmentScheduleListItem from "./AppointmentScheduleListItem"
import R from "ramda"
import { DateTime } from "luxon"
import AddAppointmentScheduleButton from "./AddAppointmentScheduleButton"
import AppointmentScheduleListSectionHeader from "./AppointmentScheduleListSectionHeader"
import DestroyAppointmentScheduleButton from "./DestroyAppointmentScheduleButton"

export default compose(
  graphql(appointmentSchedulesQuery, {
    props: ({ data: { appointmentSchedules } }) => ({
      appointmentSchedules: appointmentSchedules
        ? appointmentSchedules.edges.map(({ node }) => node)
        : null
    })
  }),
  branch(
    ({ appointmentSchedules }) => !appointmentSchedules,
    renderComponent(SpinnerView)
  ),
  withProps(({ appointmentSchedules }) => ({
    appointmentSchedulesByDay: R.groupBy(
      R.compose(
        startedAt => startedAt.toLocaleString(DateTime.DATE_HUGE),
        DateTime.fromISO,
        R.prop("startedAt")
      ),
      appointmentSchedules
    )
  }))
)(AppointmentScheduleList)

function AppointmentScheduleList({ appointmentSchedulesByDay }) {
  const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (prevSectionData, nextSectionData) =>
      prevSectionData !== nextSectionData
  }).cloneWithRowsAndSections(appointmentSchedulesByDay)
  return (
    <List
      dataSource={dataSource}
      renderHeader={renderHeader}
      renderRow={renderRow}
      renderLeftHiddenRow={() => null}
      renderRightHiddenRow={renderRightHiddenRow}
      renderSectionHeader={renderSectionHeader}
      disableRightSwipe={true}
      leftOpenValue={75}
      rightOpenValue={-75}
      enableEmptySections={true}
    />
  )
}

function renderSectionHeader(sectionData, sectionId) {
  return <AppointmentScheduleListSectionHeader content={sectionId} />
}

function renderHeader() {
  return <AddAppointmentScheduleButton />
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
    <DestroyAppointmentScheduleButton
      appointmentScheduleId={appointmentSchedule.id}
    />
  )
}
