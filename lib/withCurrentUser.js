import { connect } from "react-redux"
import { graphql } from "react-apollo"
import { branch, compose, renderComponent } from "recompose"
import currentUserQuery from "../graphql/currentUserQuery"
import SpinnerView from "../components/SpinnerView"

export default function withCurrentUser(showSpinnerWhenMissing) {
  return compose(
    connect(({ session: { token } }) => ({ token })),
    graphql(currentUserQuery, {
      props: ({ data: { currentUser } }) => ({ currentUser }),
      skip: ({ token }) => !token
    }),
    branch(
      ({ currentUser }) => showSpinnerWhenMissing && !currentUser,
      renderComponent(SpinnerView)
    )
  )
}
