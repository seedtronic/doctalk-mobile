import React from "react"
import { connect } from "react-redux"
import { View } from "react-native"
import styled from "styled-components/native"
import { Text } from "native-base"

const Container = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ImageContainer = styled.View`
  margin-bottom: 10;
  margin-top: 20;
  border-radius: 50;
  overflow: hidden;
`

const Image = styled.Image`
  height: 100;
  width: 100;
`

const Name = styled(Text)`
  font-size: 26;
`

export default connect(({ session: { user } }) => ({ user }))(UserProfile)

function UserProfile({ user }) {
  return (
    <Container>
      <ImageContainer>
        <Image source={{ uri: user.photoUrl }} />
      </ImageContainer>
      <View>
        <Name>{user.name}</Name>
      </View>
    </Container>
  )
}
