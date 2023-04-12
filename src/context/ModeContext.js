import React from 'react'

const ModeContext = React.createContext({
  savedVideos: [],
  changeMode: () => {},
  changeTab: () => {},
  addToSavedVideos: () => {},
  savedVideosList: () => {},
})
export default ModeContext
