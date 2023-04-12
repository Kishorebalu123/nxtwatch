import ReactPlayer from 'react-player'

import './index.css'

// const videoURL = 'https://youtu.be/YE7VzlLtp-4'
const VideoPlayer = props => {
  const {url} = props
  return (
    <div className="video-container">
      <div className="responsive-container">
        <ReactPlayer controls width="70vw" height="40vh" url={url} />
      </div>
    </div>
  )
}
export default VideoPlayer
