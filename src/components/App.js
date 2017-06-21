import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Popular from './Popular'
import Navbar from './Navbar'
import Home from './Home'
import Arena from './Arena'
import Results from './Results'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/arena' component={Arena} />
            <Route path='/arena/results' component={Results} />
            <Route path='/top' component={Popular} />
            <Route render={() => {
              return <p>404, Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App