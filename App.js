import React from "react"
import { ApolloProvider } from "react-apollo"
import apolloClient from "./lib/apolloClient"
import Main from "./screens/Main"

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Main />
    </ApolloProvider>
  )
}
