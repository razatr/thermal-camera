import React, { useState } from 'react'
import {
  ListGroup,
  Form,
  Card,
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap'

function ModeSettings({ info, setInSetup, setStatus, status }) {
  const [settings, setSettings] = useState(null)
  if (settings === null && info !== null) {
    setSettings(info.mode)
  }
  const parseName = (name) => {
    const separatorIndex = name.indexOf('-')
    return [name.slice(0, separatorIndex), +name.slice(separatorIndex + 1)]
  }
  const handleSave = (form, number) => {
    const json = []
    for (const field of form.elements) {
      const [prop, index] = parseName(field.name)
      if (!json[index]) {
        json[index] = [0, 0]
      }
      if (prop === 'temperature') {
        json[index][0] = +field.value * 100
      }
      if (prop === 'time') {
        json[index][1] = +field.value
      }
    }
    async function saveProgramm(num) {
      // eslint-disable-next-line no-param-reassign
      status.programms[num] = json
      setStatus(status)
      const response = await fetch(
        `http://192.168.4.1/edit-program-${num + 1}`,
        {
          method: 'POST',
          body: JSON.stringify(json),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
      } else {
        console.error(response.status)
      }
    }
    saveProgramm(number)
  }
  if (settings && info) {
    const { num } = info
    const body = settings.map((stage, index) => {
      return (
        <ListGroup.Item>
          <Container>
            <Row>
              <Col>
                <Form.Label>Температура(℃)</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={stage[0] / 100}
                  name={`temperature-${index}`}
                />
              </Col>
              <Col>
                <Form.Label>Время(мин)</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={stage[1]}
                  name={`time-${index}`}
                />
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
      )
    })
    return (
      <Container className="mode-settings">
        <Row>
          <Card className="status">
            <ListGroup variant="flush">
              <ListGroup.Item>Программа номер {num + 1} </ListGroup.Item>
              <Form name="my">{body}</Form>
              <ListGroup.Item>
                <Container>
                  <Row>
                    <Col>
                      <Button
                        onClick={() => {
                          setSettings(settings.concat([[0, 0]]))
                        }}
                      >
                        Добавить интервал
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="danger"
                        onClick={() => {
                          const newSettings = settings.map((item) => item)
                          newSettings.pop()
                          setSettings(newSettings)
                        }}
                      >
                        Удалить интервал
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Row>
        <Row>
          <Col>
            <Button
              onClick={() => {
                handleSave(document.forms.my, num)
              }}
            >
              Сохранить
            </Button>
          </Col>
          <Col className="close-button">
            <Button
              onClick={() => {
                setInSetup(null)
                setSettings(null)
              }}
            >
              Выйти
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
  return null
}

export default ModeSettings
