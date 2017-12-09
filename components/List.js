import React from "react"
import { ListView } from "react-native"
import { List as NativeBaseList } from "native-base"

export default function List({
  itemsBySection,
  SectionHeader,
  ListItem,
  ...props
}) {
  const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (prevSectionData, nextSectionData) =>
      prevSectionData !== nextSectionData
  }).cloneWithRowsAndSections(itemsBySection)
  return (
    <NativeBaseList
      renderLeftHiddenRow={() => null}
      renderRightHiddenRow={() => null}
      dataSource={dataSource}
      renderRow={item => renderRow(item, ListItem)}
      renderSectionHeader={(sectionData, sectionId) =>
        renderSectionHeader(sectionData, sectionId, SectionHeader)}
      disableRightSwipe={true}
      disableLeftSwipe={!props.renderRightHiddenRow}
      disableRightSwipe={!props.renderLeftHiddenRow}
      leftOpenValue={75}
      rightOpenValue={-75}
      enableEmptySections={true}
      {...props}
    />
  )
}

function renderSectionHeader(sectionData, sectionId, SectionHeader) {
  return <SectionHeader sectionId={sectionId} />
}

function renderRow(item, ListItem) {
  return <ListItem key={item.id} item={item} />
}
