import { ApolloClient, createNetworkInterface } from "apollo-client"

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "http://doctalk-api-prod.herokuapp.com/graphql"
  })
})
