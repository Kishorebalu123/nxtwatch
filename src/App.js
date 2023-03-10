import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import Mode from './components/Mode'
import Login from './components/Login'
import Home from './components/Home'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {darkMode: false}

  changeMode = darkMode => {
    this.setState({darkMode})
  }

  render() {
    const {darkMode} = this.state
    return (
      <Mode.Provider value={{darkMode, changeMode: this.changeMode}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </Mode.Provider>
    )
  }
}

export default App
