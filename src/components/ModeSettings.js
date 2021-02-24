import React from 'react'
import {
  ListGroup,
  Form,
  Card,
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap'

function ModeSettings({ mode, setInSetup }) {
  if (mode) {
    const body = mode.map((stage) => {
      return (
        <ListGroup.Item>
          <Form.Control type="text" defaultValue={stage[0]} />
          <Form.Control type="text" defaultValue={stage[1]} />
        </ListGroup.Item>
      )
    })
    return (
      <Container className="mode-settings">
        <Row>
          <Card className="status">
            <ListGroup variant="flush">
              {body}
              <ListGroup.Item>
                <div className="list-item-button">
                  <Button>Добавить интервал</Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Row>
        <Row>
          <Col>
            <Button>Сохранить</Button>
          </Col>
          <Col className="close-button">
            <Button
              onClick={() => {
                setInSetup(null)
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
