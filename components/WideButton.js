import React from "react"
import { View } from "react-native"
import { Button, Text } from "native-base"

export default function WideButton({
  iconName,
  IconProvider,
  label,
  ...props
}) {
  return (
    <View style={{ width: "100%" }}>
      <Button style={{ margin: 10 }} iconLeft block {...props}>
        <IconProvider
          name={iconName}
          size={24}
          color={props.light ? "black" : "white"}
        />
        <Text size={24}>{label}</Text>
      </Button>
    </View>
  )
}
