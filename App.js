import "./ReactotronConfig.js"
import React from "react"
import { ApolloProvider } from "react-apollo"
import apolloClient from "./lib/apolloClient"
import reduxStore, { persistor } from "./lib/reduxStore"
import RootScreen from "./screens/RootScreen"
import { PersistGate } from "redux-persist/es/integration/react"
import SpinnerView from "./components/SpinnerView"

export default function App() {
  return (
    <ApolloProvider client={apolloClient} store={reduxStore}>
      <PersistGate persistor={persistor} loading={<SpinnerView />}>
        <RootScreen />
      </PersistGate>
    </ApolloProvider>
  )
}
