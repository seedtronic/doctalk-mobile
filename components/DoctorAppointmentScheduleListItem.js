import { branch, compose, renderComponent, withProps } from "recompose"
import DoctorAvailableAppointmentScheduleListItem from "./DoctorAvailableAppointmentScheduleListItem"
import DoctorScheduledAppointmentScheduleListItem from "./DoctorScheduledAppointmentScheduleListItem"

export default compose(
  withProps(({ item }) => ({ appointmentSchedule: item })),
  branch(
    ({ appointmentSchedule }) => appointmentSchedule.appointment,
    renderComponent(DoctorScheduledAppointmentScheduleListItem)
  )
)(DoctorAvailableAppointmentScheduleListItem)
