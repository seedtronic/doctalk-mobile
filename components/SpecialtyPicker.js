import React from "react"
import styled from "styled-components/native"
import { Picker } from "native-base"
import withSpecialties from "../lib/withSpecialties"
import Header from "./Header"
import CloseButton from "./CloseButton"
import Spinner from "../components/Spinner"

const StyledSpinner = styled(Spinner)`
  height: 51;
`

export default withSpecialties(StyledSpinner)(SpecialtyPicker)

function SpecialtyPicker({ specialties, value, onChange }) {
  return (
    <Picker
      selectedValue={value}
      onValueChange={onChange}
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
  )
}

function buildSpecialtiesPickerHeader(goBack) {
  const CloseButtonWithHandler = () => <CloseButton onPress={goBack} />
  return (
    <Header
      title="Escolha uma especialidade"
      RightButton={CloseButtonWithHandler}
    />
  )
}
