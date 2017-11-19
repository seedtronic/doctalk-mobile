import React from "react"
import { connect } from "react-redux"
import { View } from "react-native"
import { Button, Text } from "native-base"
import { resetState } from "../lib/reducers"

export default connect(null, { resetState })(ClearLocalCacheButton)

function ClearLocalCacheButton({ resetState }) {
  return (
    <View>
      <Button onPress={resetState}>
        <Text>Limpar dados no aparelhos</Text>
      </Button>
    </View>
  )
}
