import React, { Component } from "react"
import { connect } from "react-redux"
import { Container, Root } from "native-base"
import Navigator from "./Navigator"
import { resetState } from "../lib/reducers"

class RootScreen extends Component {
  componentDidCatch(error, info) {
    console.log(error, info)
    this.props.resetState()
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
