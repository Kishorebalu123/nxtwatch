import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'
import ModeContext from '../../context/ModeContext'
import VideoCard from '../VideoCard'

import {
  Container,
  TrendingContainer,
  SideCard,
  VideosContainer,
  VideosList,
  FailureContainer,
  FailureImage,
  Heading,
  Content,
  RetryBtn,
  Trend,
  Banner,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videosData: [],
  }

  componentDidMount() {
    this.getVideosApi()
  }

  getVideosApi = async () => {
    try {
      const token = Cookies.get('jwt_token')

      this.setState({apiStatus: apiConstants.inProgress})
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const url = `https://apis.ccbp.in/videos/trending`

      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)
      if (response.ok) {
        const updatedData = data.videos.map(eachItem => ({
          id: eachItem.id,
          title: eachItem.title,
          thumbnailUrl: eachItem.thumbnail_url,
          viewCount: eachItem.view_count,
          publishedAt: eachItem.published_at,
          channelName: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        }))
        this.setState({
          videosData: updatedData,
          apiStatus: apiConstants.success,
        })
      } else {
        this.setState({apiStatus: apiConstants.failure})
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <ModeContext>
      {value => {
        const {darkMode} = value
        return (
          <FailureContainer>
            <FailureImage
              src={
                darkMode
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <Heading>Oops! Something Went Wrong</Heading>
            <Content>
              We are having some trouble to complete your request. Please try
              again
            </Content>
            <RetryBtn type="button" onClick={this.getVideosApi}>
              Retry
            </RetryBtn>
          </FailureContainer>
        )
      }}
    </ModeContext>
  )

  renderSuccessView = () => {
    const {videosData} = this.state

    return (
      <>
        <Banner data-testid="banner">
          <HiFire />
          <Trend>Trending</Trend>
        </Banner>
        <VideosList>
          {videosData.map(eachVideo => (
            <VideoCard videoData={eachVideo} key={eachVideo.id} />
          ))}
        </VideosList>
      </>
    )
  }

  renderVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccessView()

      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.inProgress:
        return this.renderLoadingView()

      default:
        return null
    }
  }

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <Container mode={darkMode} data-testid="trending">
              <Header />
              <TrendingContainer>
                <SideCard>
                  <SideBar />
                </SideCard>
                <VideosContainer>{this.renderVideos()}</VideosContainer>
              </TrendingContainer>
            </Container>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}
export default Trending
