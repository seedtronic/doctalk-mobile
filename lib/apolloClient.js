import { ApolloClient, createNetworkInterface } from "apollo-client"

export const networkInterface = createNetworkInterface({
  uri: "http://localhost:3000/graphql"
})

export default new ApolloClient({ networkInterface })
