import React, { useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { data2 } from '../test'
import ModeItem from './ModeItem'
import ModeSettings from './ModeSettings'

function ModesList() {
  const [inSetup, setInSetup] = useState(null)
  const body = data2.map((item, index) => {
    return (
      <ListGroup.Item className="mode-item">
        <ModeItem num={index} info={item} setInSetup={setInSetup} />
      </ListGroup.Item>
    )
  })
  return (
    <>
      <Card className="status">
        <ListGroup variant="flush">{body}</ListGroup>
      </Card>
      <ModeSettings mode={inSetup} setInSetup={setInSetup} />
    </>
  )
}

export default ModesList
