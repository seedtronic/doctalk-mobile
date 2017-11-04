import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { withNavigation } from "react-navigation"
import { compose } from "recompose"

const ButtonSpecialtiesList = ({ children, navigation }) => {
  const { buttonStyle, textStyle } = styles
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
  function onPress() {
    navigation.navigate("MapScreen")
  }
}

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },

  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
}
export default compose(withNavigation)(ButtonSpecialtiesList)
