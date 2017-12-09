import React from "react"
import LiteMap from "./LiteMap"
import styled from "styled-components/native"
import { Text } from "native-base"
import isEmpty from "lodash/isEmpty"

const Container = styled.View`
  margin-top: 10;
`

const MapContainer = styled.View`
  height: 100;
`
const Content = styled(Text)`
  font-size: 12;
  margin-left: 10;
  margin-top: 5;
`

export default function Address({
  address: { street, number, complement, city, state, zipcode, lat, lng }
}) {
  const complementPart = isEmpty(complement) ? "" : `, ${complement}`
  const content = `${street} ${number}${complementPart}, ${city} / ${state} - ${zipcode}`
  return (
    <Container>
      <MapContainer>
        <LiteMap latitude={lat} longitude={lng} />
      </MapContainer>
      <Content>{content}</Content>
    </Container>
  )
}
