import { compose, withProps } from "recompose"
import R from "ramda"
import { DateTime } from "luxon"
import List from "./List"
import AppointmentScheduleListSectionHeader from "./AppointmentScheduleListSectionHeader"

export default compose(
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
