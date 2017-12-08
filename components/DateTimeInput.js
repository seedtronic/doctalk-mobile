import React from "react"
import { compose, withState } from "recompose"
import DateTimePicker from "react-native-modal-datetime-picker"
import { Button, Text } from "native-base"
import { DateTime } from "luxon"

const handlerByMode = {
  date: {
    placeholder: "Selecione uma data",
    FORMAT: DateTime.DATE_FULL
  },
  time: {
    placeholder: "Selecione um horário",
    FORMAT: DateTime.TIME_SIMPLE
  }
}

export default compose(withState("isVisible", "setIsVisible", false))(
  DateTimeInput
)

function DateTimeInput({ isVisible, setIsVisible, value, onChange, mode }) {
  return [
    <Button key="0" onPress={onPress} transparent>
      <Text>{content()}</Text>
    </Button>,
    <DateTimePicker
      key="1"
      isVisible={isVisible}
      date={value ? new Date(value) : new Date()}
      onConfirm={onConfirm}
      onCancel={onCancel}
      mode={mode}
      confirmTextIOS="Confirmar"
      cancelTextIOS="Cancelar"
      titleIOS={handlerByMode[mode].placeholder}
      minimumDate={new Date()}
    />
  ]

  function content() {
    if (value) {
      return DateTime.fromISO(value, { setZone: true }).toLocaleString(
        handlerByMode[mode].FORMAT
      )
    } else {
      return handlerByMode[mode].placeholder
    }
  }

  function onPress() {
    setIsVisible(true)
  }

  function onConfirm(value) {
    if (value && value.toString() !== "Invalid Date") {
      onChange(DateTime.fromJSDate(value).toISO())
    } else if (!value) {
      onChange(null)
    }
    setIsVisible(false)
  }

  function onCancel() {
    setIsVisible(false)
  }
}
