import React from "react"
import styled from "styled-components/native"
import { Form, H3, Item, Input, Label, Picker } from "native-base"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import withSpecialties from "../lib/withSpecialties"
import Header from "./Header"
import BackButton from "./BackButton"

const Title = styled(H3)`
  margin-left: 15;
  margin-top: 20;
`

export default withSpecialties(NewDoctor)

function NewDoctor({ specialties }) {
  return (
    <KeyboardAwareScrollView>
      <Form>
        <Title>Dados profissionais</Title>
        <Item inlineLabel>
          <Label>Nome</Label>
          <Input />
        </Item>
        <Item inlineLabel>
          <Label>CRM</Label>
          <Input />
        </Item>
        <Item inlineLabel>
          <Label>Especialidade</Label>
          <Picker
            selectedValue={null}
            onValueChange={() => {}}
            placeholder="Selecionar"
            renderHeader={buildSpecialtiesPickerHeader}
          >
            {specialties.map(specialty => (
              <Picker.Item
                key={specialty.id}
                label={specialty.title}
                value={specialty.id}
              />
            ))}
          </Picker>
        </Item>

        <Title>Endereço do consultório</Title>
        <Item inlineLabel>
          <Label>Nome da rua</Label>
          <Input />
        </Item>
        <Item inlineLabel>
          <Label>Número</Label>
          <Input />
        </Item>
        <Item inlineLabel>
          <Label>Complemento</Label>
          <Input />
        </Item>
        <Item inlineLabel>
          <Label>Cidade</Label>
          <Input />
        </Item>
        <Item inlineLabel>
          <Label>Estado</Label>
          <Input />
        </Item>
        <Item inlineLabel>
          <Label>CEP</Label>
          <Input />
        </Item>
      </Form>
    </KeyboardAwareScrollView>
  )
}

function buildSpecialtiesPickerHeader(goBack) {
  const BackButtonWithHandler = () => <BackButton onPress={goBack} />
  return (
    <Header
      title="Selecione uma especialidade"
      LeftButton={BackButtonWithHandler}
    />
  )
}
