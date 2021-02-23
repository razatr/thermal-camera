import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Temperature from './components/Temperature'
import Status from './components/Status'

function App() {
  const [status, setStatus] = useState(false)

  return (
    <Container>
      <Row>
        <Col md={6} sm={12}>
          <Temperature />
        </Col>
        <Col md={6} sm={12}>
          Влажность
        </Col>
      </Row>
      <Row>
        <Status status={status} />
      </Row>
      <Row className="justify-content-center">
        <Button
          variant="primary"
          onClick={() => {
            setStatus(!status)
          }}
        >
          {status ? 'Остановить' : 'Начать'}
        </Button>
      </Row>
    </Container>
  )
}

export default App
