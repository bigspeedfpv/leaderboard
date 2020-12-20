import React from "react"

import { Name } from "./style"

const Map = ({ mapName }: { mapName: string }) => {
  return (
    <>
      <Name>{mapName}</Name>
    </>
  )
}

export default Map