import React from "react"

import { Container, Name } from "./style"

const Map = ({ mapName }: { mapName: string }) => {
  return (
    <Container>
      <Name>{mapName}</Name>
    </Container>
  )
}

export default Map