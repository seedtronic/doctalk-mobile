import React from "react"
import { compose } from "recompose"
import { Form } from "native-base"
import { reduxForm } from "redux-form"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import WideButton from "./WideButton"
import FormEntry from "./FormEntry"
import DateTimeInput from "./DateTimeInput"

export default compose(reduxForm({ form: "AppointmentSchedule" }))(DoctorForm)

function DoctorForm({ handleSubmit }) {
  return (
    <KeyboardAwareScrollView>
      <Form>
        <FormEntry name="date" mode="date" InputComponent={DateTimeInput} />
        <FormEntry name="time" mode="time" InputComponent={DateTimeInput} />
      </Form>
      <WideButton label="Adicionar" onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  )
}
