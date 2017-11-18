import React from "react"
import { branch, compose, renderComponent } from "recompose"
import { connect } from "react-redux"
import { Title } from "native-base"

export default compose(
  connect(({ map: { loading } }) => ({ loading })),
  branch(({ loading }) => loading, renderComponent(LoadingMessage))
)(MapTitle)

export function LoadingMessage() {
  return <Title>Buscando médicos</Title>
}

export function MapTitle() {
  return <Title>Escolha um médico</Title>
}
