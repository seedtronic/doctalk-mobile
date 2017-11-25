import React from "react"
import { connect } from "react-redux"
import { compose } from "recompose"
import { View } from "react-native"
import styled from "styled-components/native"
import ClearLocalDataButton from "./ClearLocalDataButton"
import NewDoctorButton from "./NewDoctorButton"
import GoogleButton from "./GoogleButton"
import LogoutButton from "./LogoutButton"
import UserProfile from "./UserProfile"

const Container = styled.View`
  flex-direction: column;
  align-items: stretch;
`

export default compose(connect(({ session: { user } }) => ({ user })))(User)

function User({ user }) {
  return (
    <Container>
      <View>
        {user ? <UserProfile /> : <GoogleButton />}
        <NewDoctorButton disabled={!user} />
      </View>
      <View>
        {user && <LogoutButton />}
        <ClearLocalDataButton />
      </View>
    </Container>
  )
}
