import React from "react"
import { ListView } from "react-native"
import { List as NativeBaseList } from "native-base"
import R from "ramda"

export default function List({
  items,
  itemsBySection,
  SectionHeader,
  ListItem,
  ...props
}) {
  const emptyDataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (prevSectionData, nextSectionData) =>
      prevSectionData !== nextSectionData
  })
  const dataSource = items
    ? emptyDataSource.cloneWithRows(items)
    : emptyDataSource.cloneWithRowsAndSections(itemsBySection)
  return (
    <NativeBaseList
      renderLeftHiddenRow={() => null}
      renderRightHiddenRow={() => null}
      dataSource={dataSource}
      renderRow={R.curry(renderRow)(ListItem)}
      renderSectionHeader={R.curry(renderSectionHeader)(SectionHeader)}
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

function renderSectionHeader(SectionHeader, sectionData, sectionId) {
  if (SectionHeader) {
    return <SectionHeader sectionId={sectionId} />
  }
}

function renderRow(ListItem, item) {
  return <ListItem key={item.id} item={item} />
}
