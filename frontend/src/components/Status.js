import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import StatusItem from './StatusItem'

function Status({ data, stagesState }) {
  const body = data.map((item, index) => {
    return (
      <ListGroup.Item>
        <StatusItem
          temperature={item[0]}
          time={item[1]}
          num={index}
          currentStatus={stagesState[index]}
        />
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
