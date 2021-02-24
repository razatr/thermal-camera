import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import Settings from './components/Settings'

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
