import React from "react"
import { connect } from "react-redux"
import { compose } from "recompose"
import { View } from "react-native"
import styled from "styled-components/native"
import ClearLocalDataButton from "./ClearLocalDataButton"
import CurrentDoctorButton from "./CurrentDoctorButton"
import GoogleButton from "./GoogleButton"
import LogoutButton from "./LogoutButton"
import UserProfile from "./UserProfile"

const Container = styled.View`
  flex-direction: column;
  align-items: stretch;
`

export default compose(connect(({ session: { token } }) => ({ token })))(User)

function User({ token }) {
  return (
    <Container>
      <View>
        {token ? <UserProfile /> : <GoogleButton />}
        <CurrentDoctorButton />
      </View>
      <View>
        {token && <LogoutButton />}
        <ClearLocalDataButton />
      </View>
    </Container>
  )
}
