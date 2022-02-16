import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

import ModeItem from './ModeItem'

function ModesList({ setInSetup, data }) {
  const body = data.map((item, index) => {
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
    </>
  )
}

export default ModesList
