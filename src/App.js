import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import FullProfile from './pages/FullProfile'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/person/:id'>
          <FullProfile />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
