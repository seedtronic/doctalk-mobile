import React from "react"
import { graphql } from "react-apollo"
import { compose, withHandlers } from "recompose"
import { Button, Icon } from "native-base"
import destroyAppointmentMutation from "../graphql/destroyAppointmentMutation"

export default compose(
  graphql(destroyAppointmentMutation, {
    props: ({ mutate, ownProps: { appointmentId } }) => ({
      destroyAppointment: () =>
        mutate({
          refetchQueries: [
            "DoctorAppointmentSchedules",
            "UserAppointmentSchedules"
          ],
          variables: { appointmentId }
        })
    })
  }),
  withHandlers({
    onPress: ({ destroyAppointment }) => destroyAppointment
  })
)(DestroyAppointmentButton)

function DestroyAppointmentButton({ onPress }) {
  return (
    <Button full danger onPress={onPress}>
      <Icon active name="trash" />
    </Button>
  )
}
