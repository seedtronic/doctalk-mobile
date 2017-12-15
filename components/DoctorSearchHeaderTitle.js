import React from "react"
import { branch, compose, renderComponent } from "recompose"
import { connect } from "react-redux"
import { Title } from "native-base"
import withIsCurrentRouteGetters from "../lib/withIsCurrentRouteGetters"

export default compose(
  withIsCurrentRouteGetters,
  connect(({ doctorList, map }) => ({ doctorList, map })),
  branch(
    ({ doctorList, map, getIsCurrentRoute }) =>
      (getIsCurrentRoute("DoctorSearchByListScreen") && doctorList.loading) ||
      (getIsCurrentRoute("DoctorSearchByMapScreen") && map.loading),
    renderComponent(LoadingMessage)
  )
)(DoctorSearchHeaderTitle)

export function LoadingMessage() {
  return <Title>Buscando médicos</Title>
}

export function DoctorSearchHeaderTitle() {
  return <Title>Escolha um médico</Title>
}
