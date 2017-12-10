import { connect } from "react-redux"
import Expo from "expo"
import { graphql } from "react-apollo"
import { compose, withHandlers, withState } from "recompose"
import loginWithGoogleMutation from "../graphql/loginWithGoogleMutation"
import { setToken } from "../lib/reducers/session"

export default compose(
  connect(null, { setToken }),
  graphql(loginWithGoogleMutation, {
    props: ({ mutate, ownProps: { setToken } }) => ({
      loginWithGoogle: variables =>
        mutate({ variables }).then(response =>
          setToken(response.data.loginWithGoogle.token)
        )
    })
  }),
  withState("loading", "setLoading", false),
  withHandlers({
    onPress: props => () => onPress(props)
  })
)

async function onPress({ loginWithGoogle, setLoading }) {
  setLoading(true)
  try {
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
  } catch (error) {
    console.log(error)
  }
  setLoading(false)
}
