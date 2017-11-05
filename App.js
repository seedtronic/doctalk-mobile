import React from "react"
import { ApolloProvider } from "react-apollo"
import apolloClient from "./lib/apolloClient"
import reduxStore from "./lib/reduxStore"
import Main from "./screens/Main"

export default function App() {
  return (
    <ApolloProvider client={apolloClient} store={reduxStore}>
      <Main />
    </ApolloProvider>
  )
}
