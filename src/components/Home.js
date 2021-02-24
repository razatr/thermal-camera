import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Temperature from './Temperature'
import Status from './Status'

function Home() {
  const [status, setStatus] = useState({})
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://192.168.4.1/status')
      if (response.ok) {
        const data = await response.json()
        setStatus(data)
      } else {
        console.error(response.status)
      }
    }
    fetchData()
  })

  return (
    <Container className="home">
      <Row>
        <Col>
          <Form.Control as="select" className="settings-selector">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12}>
          <Temperature />
        </Col>
        <Col md={6} sm={12}>
          Влажность
        </Col>
      </Row>
      <Row>
        <Col>Не выполняется</Col>
      </Row>
      <Row>
        <Status status={status} />
      </Row>
      <Row className="justify-content-center">
        <Button
          variant="primary"
          onClick={() => {
            console.log('click')
          }}
        >
          Начать
        </Button>
      </Row>
    </Container>
  )
}

export default Home
