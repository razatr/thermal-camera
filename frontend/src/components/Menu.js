import React from 'react'
import { Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <Navbar variant="light" bg="dark" className="justify-content-between">
      <Link to="/" className="link-color">
        <Button>Домой</Button>
      </Link>
      <Link to="/settings" className="link-color">
        <Button>Настройки</Button>
      </Link>
    </Navbar>
  )
}

export default Menu
