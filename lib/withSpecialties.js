import { branch, compose, renderComponent, withProps } from "recompose"
import { graphql } from "react-apollo"
import specialtiesQuery from "../graphql/specialtiesQuery"

export default function withSpecialties(Spinner) {
  return compose(
    graphql(specialtiesQuery),
    withProps(({ data: { specialties } }) => {
      return {
        specialties: (specialties ? specialties.edges : []).map(
          ({ node }) => node
        )
      }
    }),
    branch(({ data: { loading } }) => loading, renderComponent(Spinner))
  )
}
