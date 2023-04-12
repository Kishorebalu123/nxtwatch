import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import ModeContext from './context/ModeContext'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {
    savedVideos: [],
    darkMode: 'false',
    activeTab: 'HOME',
  }

  componentDidMount() {
    const getMode = JSON.parse(localStorage.getItem('mod'))
    const getActiveTab = localStorage.getItem('tab')
    const getSavedVideos = this.getSavedVideo()
    this.setState({
      activeTab: getActiveTab,
      savedVideos: getSavedVideos,
      darkMode: getMode,
    })
  }

  getSavedVideo = () => {
    let kk
    const videos = JSON.parse(localStorage.getItem('videos'))
    if (videos === null) {
      kk = []
    } else {
      kk = videos
    }
    return kk
  }

  saveItem = () => {
    const {savedVideos} = this.state
    localStorage.setItem('videos', JSON.stringify(savedVideos))
  }

  setActiveTab = () => {
    const {activeTab} = this.state
    localStorage.setItem('tab', activeTab)
  }

  setMode = () => {
    const {darkMode} = this.state
    localStorage.setItem('mod', JSON.stringify(darkMode))
  }

  changeMode = darkMode => {
    this.setState({darkMode}, this.setMode)
  }

  changeTab = activeTab => {
    this.setState({activeTab}, this.setActiveTab)
  }

  addToSavedVideos = data => {
    const {savedVideos} = this.state
    const checkSavedVideos = savedVideos.some(each => each.id === data.id)
    if (checkSavedVideos) {
      const filteredVideos = savedVideos.filter(each => each.id !== data.id)
      this.setState({savedVideos: filteredVideos}, this.saveItem)
    } else {
      this.setState(
        prevState => ({
          savedVideos: [...prevState.savedVideos, data],
        }),
        this.saveItem,
      )
    }
  }

  render() {
    const {darkMode, activeTab, savedVideos} = this.state
    console.log(darkMode)
    return (
      <ModeContext.Provider
        value={{
          darkMode,
          activeTab,
          savedVideos,
          changeTab: this.changeTab,
          changeMode: this.changeMode,
          addToSavedVideos: this.addToSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </ModeContext.Provider>
    )
  }
}

export default App
