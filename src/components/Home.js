import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Temperature from './Temperature'
import Status from './Status'
import { data2 } from '../test'

function Home() {
  const [status, setStatus] = useState({})
  const [mode, setMode] = useState(0)
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

  const options = data2.map((item, index) => {
    return <option>{index + 1}</option>
  })

  return (
    <Container className="home">
      <Row>
        <Col>
          <Form.Control
            as="select"
            className="settings-selector"
            onChange={(ev) => {
              setMode(ev.target.value - 1)
            }}
          >
            {options}
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
        <Status status={status} data={data2[mode]} />
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
