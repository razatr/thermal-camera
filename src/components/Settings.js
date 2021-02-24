import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import ModesList from './ModesList'

function Settings() {
  return (
    <Container>
      <Row>
        <ModesList />
      </Row>
      <Row className="justify-content-center">
        <Button>Добавить программу</Button>
      </Row>
    </Container>
  )
}

export default Settings
