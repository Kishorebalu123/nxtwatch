import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import ModeContext from '../../context/ModeContext'

import {
  EachVideo,
  ThumbnailImage,
  DetailsCard,
  Description,
  ProfileLogo,
  ChannelName,
  PublishedAt,
  Views,
  Title,
  Paragraph,
} from './styledComponents'

const VideoCard = props => {
  const {videoData} = props

  const {
    channelName,
    id,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoData

  return (
    <ModeContext.Consumer>
      {value => {
        const {darkMode} = value
        return (
          <Link to={`/videos/${id}`}>
            <EachVideo>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <DetailsCard>
                <ProfileLogo src={profileImageUrl} alt="channel logo" />
                <Description>
                  <Title mode={darkMode}>{title}</Title>
                  <Paragraph>
                    <ChannelName>{channelName}</ChannelName>
                    <Views>Views {viewCount}</Views>
                    <PublishedAt>
                      {formatDistanceToNow(new Date(publishedAt), {
                        addSuffix: true,
                      })}
                    </PublishedAt>
                  </Paragraph>
                </Description>
              </DetailsCard>
            </EachVideo>
          </Link>
        )
      }}
    </ModeContext.Consumer>
  )
}
export default VideoCard
