import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"

export default new ApolloClient({
  link: new HttpLink({ uri: "http://doctalk-api-prod.herokuapp.com/graphql" }),
  cache: new InMemoryCache()
})
