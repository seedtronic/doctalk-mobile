import React from "react"
import LiteMap from "./LiteMap"
import styled from "styled-components/native"
import { Text } from "native-base"
import isEmpty from "lodash/isEmpty"

const Container = styled.View`
  margin-top: 15;
`

const MapContainer = styled.View`
  height: ${({ height }) => height};
`
const Content = styled(Text)`
  font-size: 14;
  margin-left: ${({ block }) => (block ? 10 : 0)};
  margin-right: ${({ block }) => (block ? 10 : 0)};
  margin-top: 10;
  align-self: flex-start;
`

export default function Address({
  address: { street, number, complement, city, state, zipcode, lat, lng },
  block,
  mapHeight
}) {
  const complementPart = isEmpty(complement) ? "" : `, ${complement}`
  const content = `${street} ${number}${complementPart}, ${city} / ${state} - ${zipcode}`
  return (
    <Container>
      <MapContainer height={mapHeight}>
        <LiteMap latitude={lat} longitude={lng} />
      </MapContainer>
      <Content block={block}>{content}</Content>
    </Container>
  )
}
