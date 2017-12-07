import React from "react"
import { Field, FieldArray } from "redux-form"
import { Item, Label } from "native-base"
import FormInput from "./FormInput"

export default function InputFormEntry({ label, isArray, ...props }) {
  const FieldComponent = isArray ? FieldArray : Field
  return (
    <Item inlineLabel>
      {label && <Label>{label}</Label>}
      <FieldComponent {...props} component={FormInput} />
    </Item>
  )
}
