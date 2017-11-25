import { ApolloClient, createNetworkInterface } from "apollo-client"

export const networkInterface = createNetworkInterface({
  uri: "http://doctalk-api-prod.herokuapp.com/graphql"
})

export default new ApolloClient({ networkInterface })
