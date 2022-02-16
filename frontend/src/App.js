import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import Home from './components/Home'
import Menu from './components/Menu'
import Settings from './components/Settings'

function App() {
  const [status, setStatus] = useState(null)
  const [loaded, setLoadedState] = useState(false)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://192.168.4.1/status')
      if (response.ok) {
        const data = await response.json()
        setStatus(data)
        setLoadedState(true)
      } else {
        console.error(response.status)
      }
    }
    if (!loaded) {
      fetchData()
    }
  })
  return loaded ? (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home status={status} />
        </Route>
        <Route path="/settings">
          <Settings status={status} setStatus={setStatus} />
        </Route>
      </Switch>
    </Router>
  ) : (
    <div className="central">
      <Spinner animation="grow" />
    </div>
  )
}

export default App
