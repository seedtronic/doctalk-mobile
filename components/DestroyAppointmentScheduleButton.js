import React from "react"
import { graphql } from "react-apollo"
import { compose, withHandlers } from "recompose"
import { Button, Icon } from "native-base"
import destroyAppointmentScheduleMutation from "../graphql/destroyAppointmentScheduleMutation"

export default compose(
  graphql(destroyAppointmentScheduleMutation, {
    props: ({ mutate, ownProps: { appointmentScheduleId } }) => ({
      destroyAppointmentSchedule: () =>
        mutate({
          refetchQueries: ["DoctorAppointmentSchedules"],
          variables: { appointmentScheduleId }
        })
    })
  }),
  withHandlers({
    onPress: ({ destroyAppointmentSchedule }) => destroyAppointmentSchedule
  })
)(DestroyAppointmentScheduleButton)

function DestroyAppointmentScheduleButton({ onPress }) {
  return (
    <Button full danger onPress={onPress}>
      <Icon active name="trash" />
    </Button>
  )
}
