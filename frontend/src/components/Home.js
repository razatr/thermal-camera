import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Status from './Status'

function Home({ status }) {
  const [mode, setMode] = useState(0)
  const [executionStatus, setExecutionStatus] = useState({
    inProgress: false,
    currentStage: 0,
    stageTime: 0,
    stageStatus: 0,
    t: null,
    h: null,
    t2: null,
    h2: null
  })

  const stagesState = []

  if (status.programms) {
    const len = status.programms[mode].length
    for (let i = 0; i < len; i++) {
      stagesState[i] = [3, -1]
    }
    stagesState[executionStatus.currentStage] = [
      executionStatus.stageStatus,
      executionStatus.stageTime
    ]
    if (executionStatus.currentStage !== len - 1) {
      stagesState.fill([0, 0], executionStatus.currentStage + 1, len)
    }
  }

  async function reloadState() {
    const response = await fetch('http://192.168.4.1/execution-status')
    if (response.ok) {
      const data = await response.json()
      data.inProgress = data.inProgress === 1
      setExecutionStatus(data)
    } else {
      console.error(response.status)
    }
  }

  if (executionStatus.inProgress) {
    setTimeout(() => {
      console.log('reload')
      reloadState()
    }, 1000)
  }

  const getBody = () => {
    const { t: temperature, h: humidity, programms } = status

    const options = programms.map((item, index) => {
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
            {`Температура ${
              executionStatus.t ? executionStatus.t / 100 : temperature / 100
            }`}
          </Col>
          <Col md={6} sm={12}>
            {`Температура(bme2) ${
              executionStatus.t2 ? executionStatus.t2 / 100 : ''
            }`}
          </Col>
          <Col md={6} sm={12}>
            {`Влажность ${
              executionStatus.h
                ? Math.floor(executionStatus.h / 100) / 10
                : Math.floor(humidity / 100) / 10
            }`}
          </Col>
        </Row>
        <Row>
          <Col>
            {executionStatus.inProgress ? 'Выполняется' : 'Не выполняется'}
          </Col>
        </Row>
        <Row>
          <Status data={programms[mode]} stagesState={stagesState} />
        </Row>
        <Row className="justify-content-center">
          <Button
            variant="primary"
            onClick={() => {
              async function start() {
                const response = await fetch(
                  `http://192.168.4.1/start-${mode + 1}`
                )
                if (response.ok) {
                  const data = await response
                  console.log(`start ${data}`)
                  setExecutionStatus({
                    inProgress: true,
                    currentStage: 0,
                    stageTime: 0,
                    stageStatus: 0,
                    t: null,
                    h: null,
                    t2: null,
                    h2: null
                  })
                } else {
                  console.error(response.status)
                }
              }
              async function stop() {
                const response = await fetch(`http://192.168.4.1/stop`)
                if (response.ok) {
                  console.log('stop')
                  setExecutionStatus({
                    inProgress: false,
                    currentStage: 0,
                    stageTime: 0,
                    stageStatus: 0,
                    t: null,
                    h: null,
                    t2: null,
                    h2: null
                  })
                } else {
                  console.error(response.status)
                }
              }
              if (executionStatus.inProgress) {
                stop()
              } else {
                start()
              }
            }}
          >
            {executionStatus.inProgress ? 'Завершить' : 'Начать'}
          </Button>
        </Row>
      </Container>
    )
  }

  return getBody()
}

export default Home
