import React, { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import ModesList from './ModesList'
import ModeSettings from './ModeSettings'
import { data2 } from '../test'

function Settings({ status, setStatus }) {
  const [inSetup, setInSetup] = useState(null)
  console.log(status)
  return inSetup ? (
    <ModeSettings
      info={inSetup}
      setInSetup={setInSetup}
      setStatus={setStatus}
      status={status}
    />
  ) : (
    <Container>
      <Row>
        <ModesList setInSetup={setInSetup} data={status.programms} />
      </Row>
      <Row className="justify-content-center">
        <Button
          onClick={() => {
            setInSetup({
              num: data2.length,
              mode: [
                [0, 0],
                [0, 0],
                [0, 0]
              ]
            })
          }}
        >
          Добавить программу
        </Button>
      </Row>
    </Container>
  )
}

export default Settings
