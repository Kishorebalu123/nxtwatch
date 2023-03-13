import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {GrClose} from 'react-icons/gr'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import Mode from '../Mode'
import VideoCard from '../VideoCard'

import {
  MainContainer,
  HomeContainer,
  PremiumContainer,
  PremiumLogo,
  AboutPremium,
  ImageCard,
  GetItNow,
  SearchContainer,
  SearchInput,
  SearchBtn,
  VideosContainer,
  VideosList,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiConstants.initial,
    searchInput: '',
    dar: true,
    showPremiumCard: true,
    videosData: [],
  }

  componentDidMount() {
    this.getVideosApi()
  }

  getVideosApi = async () => {
    try {
      const token = Cookies.get('jwt_token')
      const {searchInput} = this.state
      this.setState({apiStatus: apiConstants.inProgress})
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

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

  closeBtn = () => {
    this.setState({showPremiumCard: false})
  }

  renderPremiumCard = () => {
    const {showPremiumCard} = this.state
    return (
      showPremiumCard && (
        <PremiumContainer>
          <ImageCard>
            <PremiumLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt=""
            />
            <GrClose onClick={this.closeBtn} />
          </ImageCard>
          <AboutPremium>
            Buy Nxt Watch Premium prepaid plans with UPI
          </AboutPremium>
          <GetItNow>GET IT NOW</GetItNow>
        </PremiumContainer>
      )
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div>
      <h1>failureView</h1>
    </div>
  )

  renderSuccessView = () => {
    const {videosData} = this.state
    return (
      <VideosList>
        {videosData.map(eachVideo => (
          <VideoCard videoData={eachVideo} key={eachVideo.id} />
        ))}
      </VideosList>
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

  changeInput = event => {
    this.setState({SearchInput: event.target.value})
  }

  renderVideosSection = () => (
    <>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search"
          onChange={this.changeInput}
        />
        <SearchBtn onClick={this.searchResults} type="button">
          <AiOutlineSearch />
        </SearchBtn>
      </SearchContainer>
      <VideosContainer>{this.renderVideos()}</VideosContainer>
    </>
  )

  render() {
    const {dar} = this.state
    return (
      <Mode.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <MainContainer>
              <Header />
              <HomeContainer>
                {this.renderPremiumCard()}
                {this.renderVideosSection()}
              </HomeContainer>
            </MainContainer>
          )
        }}
      </Mode.Consumer>
    )
  }
}
export default Home
