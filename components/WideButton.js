import React from "react"
import { View } from "react-native"
import { Button, Text } from "native-base"
import Spinner from "./Spinner"

export default function WideButton({
  iconName,
  IconProvider,
  label,
  loading,
  ...props
}) {
  const color = props.light ? "black" : "white"
  return (
    <View style={{ width: "100%" }}>
      <Button
        disabled={loading}
        style={{ margin: 10 }}
        iconLeft={!!iconName}
        block
        {...props}
      >
        {renderIcon()}
        <Text size={24}>{label}</Text>
      </Button>
    </View>
  )

  function renderIcon() {
    if (loading) {
      return <Spinner color={color} />
    } else if (iconName) {
      return <IconProvider name={iconName} size={24} color={color} />
    } else {
      return null
    }
  }
}
