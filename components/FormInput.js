import React from "react"
import styled from "styled-components"
import { Input } from "native-base"

export const FieldErrorMessage = styled.p``

export default function FormInput({
  input,
  meta,
  InputComponent = Input,
  afterChange,
  ...props
}) {
  const { touched, error } = meta
  return [
    <InputComponent
      key="0"
      {...input}
      onChange={handleChange}
      onBlur={handleBlur}
      {...props}
      meta={meta}
    />,
    renderValidationError()
  ]

  function handleChange(value) {
    input.onChange(value)
    if (afterChange) {
      afterChange()
    }
  }

  function handleBlur(event, newValue, oldValue) {
    newValue !== oldValue ? input.onBlur(event) : input.onBlur()
  }

  function renderValidationError() {
    if (touched && error) {
      return <FieldErrorMessage key="1">{error}</FieldErrorMessage>
    }
  }
}
