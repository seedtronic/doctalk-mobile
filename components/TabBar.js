import React from "react"
import { Button, Footer, FooterTab, Text } from "native-base"

export default function TabBar() {
  return (
    <Footer>
      <FooterTab>
        <Button active>
          <Text>Consulta</Text>
        </Button>
        <Button>
          <Text>Exame</Text>
        </Button>
        <Button>
          <Text>Meus dados</Text>
        </Button>
      </FooterTab>
    </Footer>
  )
}
