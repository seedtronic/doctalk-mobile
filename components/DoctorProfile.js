import React from "react"
import styled from "styled-components/native"
import { Text } from "native-base"
import { branch, compose, renderNothing, withProps } from "recompose"
import { graphql } from "react-apollo"
import doctorQuery from "../graphql/doctorQuery"

const Container = styled.View``

export default compose(
  graphql(doctorQuery),
  branch(({ data }) => data.loading, renderNothing),
  withProps(({ data: { doctor } }) => ({ doctor }))
)(DoctorProfile)

function DoctorProfile({ doctor }) {
  return (
    <Container>
      <Text>{doctor.name}</Text>
    </Container>
  )
}
