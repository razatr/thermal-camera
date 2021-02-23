import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { data } from '../test'
import StatusItem from './StatusItem'

function Status() {
  const body = data.map((item, index) => {
    return (
      <ListGroup.Item>
        <StatusItem temperature={item[0]} time={item[1]} num={index} />
      </ListGroup.Item>
    )
  })
  return (
    <Card className="status">
      <ListGroup variant="flush">{body}</ListGroup>
    </Card>
  )
}

export default Status
