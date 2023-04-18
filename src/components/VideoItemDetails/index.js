import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'

import VideoPlayer from '../VideoPlayer'
import Header from '../Header'
import SideBar from '../SideBar'
import ModeContext from '../../context/ModeContext'

import {
  Container,
  MainContainer,
  VideoDetailsContainer,
  ReactPlayerContainer,
  Title,
  ViewsContainer,
  Views,
  Time,
  ReactionContainer,
  Like,
  SaveBtn,
  Dislike,
  Save,
  Line,
  ChannelContainer,
  ChannelDetails,
  ChannelLogo,
  ChannelName,
  Subscribers,
  Description,
  SideCard,
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

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videoData: [],
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoItemDetailsApi()
  }

  getVideoItemDetailsApi = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const each = data.video_details
    if (response.ok) {
      const updatedData = {
        title: each.title,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        videoUrl: each.video_url,
        viewCount: each.view_count,
        description: each.description,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        subscriberCount: each.channel.subscriber_count,
      }

      this.setState({videoData: updatedData, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  likeVideo = () => {
    const {isLiked} = this.state
    if (isLiked) {
      this.setState({isLiked: !isLiked})
    } else {
      this.setState({isLiked: !isLiked, isDisLiked: false})
    }
  }

  disLikeVideo = () => {
    const {isDisLiked} = this.state
    if (isDisLiked) {
      this.setState({isDisLiked: !isDisLiked})
    } else {
      this.setState({isDisLiked: !isDisLiked, isLiked: false})
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
              again.
            </Content>
            <RetryBtn type="button" onClick={this.getVideoItemDetailsApi}>
              Retry
            </RetryBtn>
          </FailureContainer>
        )
      }}
    </ModeContext>
  )

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

  renderSuccessView = () => {
    const {videoData} = this.state

    const {
      description,
      id,
      name,
      title,
      profileImageUrl,
      publishedAt,
      subscriberCount,
      videoUrl,
      viewCount,
    } = videoData

    return (
      <ModeContext.Consumer>
        {value => {
          const {addToSavedVideos, savedVideos} = value
          const {isLiked, isDisLiked} = this.state
          const onSave = () => {
            addToSavedVideos(videoData)
          }
          const isSaved = savedVideos.some(each => each.id === id)
          const text = isSaved ? 'Saved' : 'Save'
          return (
            <>
              <Header />

              <MainContainer>
                <SideCard>
                  <SideBar />
                </SideCard>
                <VideoDetailsContainer>
                  <ReactPlayerContainer>
                    <VideoPlayer url={videoUrl} />
                  </ReactPlayerContainer>

                  <Title>{title}</Title>
                  <ViewsContainer>
                    <Views>{viewCount}</Views>
                    <Time>
                      {formatDistanceToNow(new Date(publishedAt), {
                        addSuffix: true,
                      })}
                    </Time>
                  </ViewsContainer>
                  <ReactionContainer>
                    <Like like={isLiked} onClick={this.likeVideo} type="button">
                      <AiOutlineLike /> Like
                    </Like>
                    <Dislike
                      liked={isDisLiked}
                      onClick={this.disLikeVideo}
                      type="button"
                    >
                      <AiOutlineDislike /> Dislike
                    </Dislike>
                    <Save>
                      <MdPlaylistAdd />
                      <SaveBtn saved={isSaved} type="button" onClick={onSave}>
                        {text}
                      </SaveBtn>
                    </Save>
                  </ReactionContainer>
                  <Line />
                  <ChannelContainer>
                    <ChannelLogo src={profileImageUrl} alt="channel logo" />
                    <ChannelDetails>
                      <ChannelName>{name}</ChannelName>
                      <Subscribers>{subscriberCount}</Subscribers>
                    </ChannelDetails>
                  </ChannelContainer>
                  <Description>{description}</Description>
                </VideoDetailsContainer>
              </MainContainer>
            </>
          )
        }}
      </ModeContext.Consumer>
    )
  }

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <Container mode={darkMode} data-testid="videoItemDetails">
              {this.renderVideos()}
            </Container>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}
export default VideoItemDetails
