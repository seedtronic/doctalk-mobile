import React from "react"
import { compose, withHandlers } from "recompose"
import styled from "styled-components/native"
import { Form, H3 } from "native-base"
import { reduxForm } from "redux-form"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import WideButton from "./WideButton"
import FormEntry from "./FormEntry"
import SpecialtyPicker from "./SpecialtyPicker"

const Title = styled(H3)`
  margin-left: 15;
  margin-top: 20;
`

export default compose(
  withHandlers({ onSubmit: () => values => console.log(values) }),
  reduxForm({ form: "NewDoctor" })
)(NewDoctor)

function NewDoctor({ specialties, handleSubmit }) {
  return (
    <KeyboardAwareScrollView>
      <Form>
        <Title>Dados profissionais</Title>
        <FormEntry label="Nome" name="name" />
        <FormEntry label="CRM" name="crm" />
        <FormEntry
          label="Especialidade"
          name="specialtyId"
          InputComponent={SpecialtyPicker}
        />
        <Title>Endereço do consultório</Title>
        <FormEntry label="Rua" name="street" />
        <FormEntry label="Número" name="number" />
        <FormEntry label="Complemento" name="complement" />
        <FormEntry label="Cidade" name="city" />
        <FormEntry label="State" name="Estado" />
        <FormEntry label="CEP" name="zipcode" />
      </Form>
      <WideButton label="Salvar cadastro" onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  )
}
