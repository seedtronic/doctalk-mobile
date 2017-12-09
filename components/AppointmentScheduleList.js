import React from "react"
import { ListView } from "react-native"
import { branch, compose, renderComponent, withProps } from "recompose"
import { List } from "native-base"
import SpinnerView from "./SpinnerView"
import AppointmentScheduleListItem from "./AppointmentScheduleListItem"
import R from "ramda"
import { DateTime } from "luxon"
import AppointmentScheduleListSectionHeader from "./AppointmentScheduleListSectionHeader"

export default compose(
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

function AppointmentScheduleList({ appointmentSchedulesByDay, ...props }) {
  const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (prevSectionData, nextSectionData) =>
      prevSectionData !== nextSectionData
  }).cloneWithRowsAndSections(appointmentSchedulesByDay)
  return (
    <List
      renderLeftHiddenRow={() => null}
      renderRightHiddenRow={() => null}
      dataSource={dataSource}
      renderRow={renderRow}
      renderSectionHeader={renderSectionHeader}
      disableRightSwipe={true}
      disableLeftSwipe={!props.renderRightHiddenRow}
      disableRightSwipe={!props.renderLeftHiddenRow}
      leftOpenValue={75}
      rightOpenValue={-75}
      enableEmptySections={true}
      {...props}
    />
  )
}

function renderSectionHeader(sectionData, sectionId) {
  return <AppointmentScheduleListSectionHeader content={sectionId} />
}

function renderRow(appointmentSchedule) {
  return (
    <AppointmentScheduleListItem
      key={appointmentSchedule.id}
      appointmentSchedule={appointmentSchedule}
    />
  )
}
