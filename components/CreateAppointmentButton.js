import React from "react"
import { connect } from "react-redux"
import { graphql } from "react-apollo"
import { branch, compose, renderComponent, withHandlers } from "recompose"
import { Button, Text } from "native-base"
import createAppointmentMutation from "../graphql/createAppointmentMutation"
import withNavigate from "../lib/withNavigate"
import withGoogleLogin from "../lib/withGoogleLogin"

export default compose(
  connect(({ session: { token } }) => ({ token })),
  branch(
    ({ token }) => !token,
    renderComponent(withGoogleLogin(CreateAppointmentButton))
  ),
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

function CreateAppointmentButton({ onPress }) {
  return (
    <Button small onPress={onPress}>
      <Text>Marcar consulta</Text>
    </Button>
  )
}
