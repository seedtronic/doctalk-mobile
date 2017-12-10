import React from "react"
import styled from "styled-components/native"
import { ListItem } from "native-base"
import DoctorProfileLite from "./DoctorProfileLite"
import withNavigate from "../lib/withNavigate"

const Item = styled(ListItem)`
  flex-direction: column;
  padding-left: 10;
  padding-right: 10;
`
export default withNavigate(DoctorListItem)

function DoctorListItem({ item, navigate }) {
  return (
    <Item onPress={navigate("DoctorScreen", { doctorId: item.id })}>
      <DoctorProfileLite doctor={item} mapHeight={100} />
    </Item>
  )
}
