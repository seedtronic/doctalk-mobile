import Spinner from "./Spinner"
import styled from "styled-components/native"

const Container = styled.View`
  flex-grow: 1;
`

export default function SpinnerView() {
  return (
    <Container>
      <Spinner />
    </Container>
  )
}
