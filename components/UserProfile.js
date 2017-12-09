import { graphql } from "react-apollo"
import { compose } from "recompose"
import currentUserQuery from "../graphql/currentUserQuery"
import Profile from "./Profile"

export default compose(
  graphql(currentUserQuery, {
    props: ({ data }) => ({ subject: data.currentUser })
  })
)(Profile)
