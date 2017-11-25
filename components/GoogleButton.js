import React from "react"
import { connect } from "react-redux"
import Expo from "expo"
import { graphql } from "react-apollo"
import { compose } from "recompose"
import { Button, Text } from "native-base"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import loginWithGoogleMutation from "../graphql/loginWithGoogleMutation"
import { setUser } from "../lib/reducers/session"

export default compose(
  connect(null, { setUser }),
  graphql(loginWithGoogleMutation, {
    props: ({ mutate, ownProps: { setUser } }) => ({
      loginWithGoogle: variables =>
        mutate({ variables }).then(response =>
          setUser(response.data.loginWithGoogle)
        )
    })
  })
)(GoogleButton)

function GoogleButton({ loginWithGoogle }) {
  return (
    <Button onPress={onPress}>
      <MaterialCommunityIcons name="google" size={24} />
      <Text size={24}>Login with Google</Text>
    </Button>
  )

  async function onPress() {
    const result = await Expo.Google.logInAsync({
      androidClientId:
        "274763169331-n32ea4t1m3kln2asl7gdqv2pu7kaq5ef.apps.googleusercontent.com",
      iosClientId:
        "274763169331-mc3r4b0e79i72a576ebtj2agrd26fot1.apps.googleusercontent.com",
      webClientId:
        "274763169331-frpn69903v61iu42m1kdgs8iq2d8383s.apps.googleusercontent.com",
      scopes: ["profile", "email"]
    })
    if (result.type === "success") {
      loginWithGoogle({
        idToken: result.idToken,
        photoUrl: result.user.photoUrl
      })
    }
  }
}
