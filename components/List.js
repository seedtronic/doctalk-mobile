import React from "react"
import { compose, lifecycle } from "recompose"
import { ListView } from "react-native"
import { List as NativeBaseList } from "native-base"
import R from "ramda"
import isEmpty from "lodash/isEmpty"

export default compose(
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (isEmpty(nextProps.itemsBySection) && nextProps.onEmptyList) {
        nextProps.onEmptyList()
      }
    }
  })
)(List)

function List({ itemsBySection, SectionHeader, ListItem, ...props }) {
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
  return <SectionHeader sectionId={sectionId} />
}

function renderRow(ListItem, item) {
  return <ListItem key={item.id} item={item} />
}
