import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {GrClose} from 'react-icons/gr'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import ModeContext from '../../context/ModeContext'
import VideoCard from '../VideoCard'
import SideBar from '../SideBar'

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
  VideosSection,
  VideosContainer,
  VideosList,
  Card,
  SideCard,
  NoVideosView,
  NoResultsImage,
  NoResultsFound,
  Paragraph,
  Retry,
  FailureContainer,
  FailureImage,
  Heading,
  Content,
  RetryBtn,
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
    showPremiumCard: true,
    videosData: [],
  }

  componentDidMount() {
    this.getVideosApi()
  }

  getVideosApi = async () => {
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
    //    console.log(data)
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
  }

  closeBtn = () => {
    this.setState({showPremiumCard: false})
  }

  renderPremiumCard = () => {
    const {showPremiumCard} = this.state
    return (
      showPremiumCard && (
        <PremiumContainer data-testid="banner">
          <ImageCard>
            <PremiumLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <button type="button" data-testid="close" onClick={this.closeBtn}>
              <GrClose />
            </button>
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
    const view = videosData.length > 0
    return view ? (
      <VideosList>
        {videosData.map(eachVideo => (
          <VideoCard videoData={eachVideo} key={eachVideo.id} />
        ))}
      </VideosList>
    ) : (
      <NoVideosView>
        <NoResultsImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoResultsFound>No Search results found</NoResultsFound>
        <Paragraph>Try different key words or remove search filter</Paragraph>
        <Retry onClick={() => this.getVideosApi} type="button">
          Retry
        </Retry>
      </NoVideosView>
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
    this.setState({searchInput: event.target.value})
  }

  searchResults = () => {
    const {searchInput, videosData} = this.state
    let filteredVideos
    if (searchInput !== '') {
      filteredVideos = videosData.filter(eachVideo =>
        eachVideo.title.includes(searchInput),
      )
      this.setState({videosData: filteredVideos}, this.getVideosApi)
    } else {
      this.getVideosApi()
    }
  }

  renderVideosSection = () => (
    <ModeContext.Consumer>
      {value => {
        const {darkMode} = value
        const {searchInput} = this.state
        return (
          <VideosSection mode={darkMode}>
            <SearchContainer>
              <SearchInput
                mode={darkMode}
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.changeInput}
              />
              <SearchBtn
                mode={darkMode}
                onClick={this.searchResults}
                type="button"
                data-testid="searchButton"
              >
                <AiOutlineSearch />
              </SearchBtn>
            </SearchContainer>
            <VideosContainer>{this.renderVideos()}</VideosContainer>
          </VideosSection>
        )
      }}
    </ModeContext.Consumer>
  )

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <MainContainer mode={darkMode} data-testid="home">
              <Header />
              <HomeContainer>
                <SideCard>
                  <SideBar />
                </SideCard>
                <Card>
                  {this.renderPremiumCard()}
                  {this.renderVideosSection()}
                </Card>
              </HomeContainer>
            </MainContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Home
