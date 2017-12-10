import React from "react"
import styled from "styled-components/native"
import { ListItem } from "native-base"
import DoctorProfileLite from "./DoctorProfileLite"

const Item = styled(ListItem)`
  flex-direction: column;
  padding-left: 10;
  padding-right: 10;
`
export default function DoctorListItem({ item }) {
  return (
    <Item>
      <DoctorProfileLite doctor={item} />
    </Item>
  )
}
