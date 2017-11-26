import { ApolloClient, createNetworkInterface } from "apollo-client"

export const networkInterface = createNetworkInterface({
  uri: "http://doctalk-api-prod.herokuapp.com/graphql"
  // uri: "http://localhost:3000/graphql"
})

export default new ApolloClient({ networkInterface })
