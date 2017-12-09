import { branch, compose, renderComponent, withProps } from "recompose"
import SpinnerView from "./SpinnerView"
import R from "ramda"
import { DateTime } from "luxon"
import List from "./List"
import AppointmentScheduleListSectionHeader from "./AppointmentScheduleListSectionHeader"

export default compose(
  branch(
    ({ appointmentSchedules }) => !appointmentSchedules,
    renderComponent(SpinnerView)
  ),
  withProps(({ appointmentSchedules }) => ({
    itemsBySection: R.groupBy(
      R.compose(
        startedAt => startedAt.toLocaleString(DateTime.DATE_HUGE),
        DateTime.fromISO,
        R.prop("startedAt")
      ),
      appointmentSchedules
    ),
    SectionHeader: AppointmentScheduleListSectionHeader
  }))
)(List)
