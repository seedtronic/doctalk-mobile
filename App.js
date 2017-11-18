import "./ReactotronConfig.js"
import React from "react"
import { ApolloProvider } from "react-apollo"
import apolloClient from "./lib/apolloClient"
import reduxStore from "./lib/reduxStore"
import Navigator from "./screens/Navigator"

export default function App() {
  return (
    <ApolloProvider client={apolloClient} store={reduxStore}>
      <Navigator />
    </ApolloProvider>
  )
}
