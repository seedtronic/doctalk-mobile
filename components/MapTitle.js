import React from "react"
import { branch, compose, renderComponent } from "recompose"
import { connect } from "react-redux"
import { Text } from "native-base"

export default compose(
  connect(({ mapFilter: { loading } }) => ({ loading })),
  branch(({ loading }) => loading, renderComponent(LoadingMessage))
)(MapTitle)

export function LoadingMessage() {
  return <Text>Buscando médicos</Text>
}

export function MapTitle() {
  return <Text>Escolha um médico</Text>
}
