import { ApolloClient, createNetworkInterface } from "apollo-client"

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "http://192.168.0.47:3000/graphql"
  })
})
