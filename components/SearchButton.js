import React from "react"
import { Button } from "react-native-elements"
import styled from "styled-components/native"
import { compose } from "recompose"
import { withNavigation } from "react-navigation"

const Container = styled.View`
  margin-right: -10;
`

export default compose(withNavigation)(SearchButton)

function SearchButton({ navigation }) {
  return (
    <Container>
      <Button
        title=""
        icon={{ name: "search", color: "white", size: 18 }}
        fontSize={16}
        borderRadius={5}
        buttonStyle={{ paddingRight: 3, height: 32 }}
        backgroundColor="steelblue"
        onPress={onPress}
      />
    </Container>
  )

  function onPress() {
    navigation.navigate("SearchScreenNavigator")
  }
}
