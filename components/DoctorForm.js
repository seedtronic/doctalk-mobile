import React from "react"
import { compose } from "recompose"
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

export default compose(reduxForm({ form: "NewDoctor" }))(NewDoctor)

function NewDoctor({ handleSubmit }) {
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
        <FormEntry label="Rua" name="address.street" />
        <FormEntry label="Número" name="address.number" />
        <FormEntry label="Complemento" name="address.complement" />
        <FormEntry label="Cidade" name="address.city" />
        <FormEntry label="Estado" name="address.state" />
        <FormEntry label="CEP" name="address.zipcode" />
      </Form>
      <WideButton label="Salvar cadastro" onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  )
}
