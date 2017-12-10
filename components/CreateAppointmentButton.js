import React from "react"
import { graphql } from "react-apollo"
import { compose, withHandlers } from "recompose"
import { Button, Text } from "native-base"
import createAppointmentMutation from "../graphql/createAppointmentMutation"
import withNavigate from "../lib/withNavigate"

export default compose(
  graphql(createAppointmentMutation, {
    props: ({ mutate, ownProps: { appointmentScheduleId } }) => ({
      createAppointment: () => mutate({ variables: { appointmentScheduleId } }),
      options: {
        refetchQueries: [
          "DoctorAppointmentSchedules",
          "UserAppointmentSchedules"
        ]
      }
    })
  }),
  withNavigate,
  withHandlers({
    onPress: ({ createAppointment, goBack, navigate }) => () =>
      createAppointment()
        .then(goBack)
        .then(navigate("UserAgendaNavigator"))
  })
)(CreateAppointmentButton)

function CreateAppointmentButton({ onPress, appointmentScheduleId }) {
  return (
    <Button small onPress={onPress}>
      <Text>Marcar consulta</Text>
    </Button>
  )
}
