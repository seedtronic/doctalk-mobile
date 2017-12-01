import React, { Component } from "react"
import { connect } from "react-redux"
import { Container, Root } from "native-base"
import Navigator from "./Navigator"
import { resetState } from "../lib/reducers"
import Expo from "expo"

class RootScreen extends Component {
  componentDidCatch(error, info) {
    console.log("Unhandled error", error, info)
    if (Expo.Constants.isDevice) {
      setTimeout(Expo.Util.reload, 500)
    }
  }

  render() {
    return (
      <Root>
        <Container>
          <Navigator />
        </Container>
      </Root>
    )
  }
}

export default connect(null, { resetState })(RootScreen)
