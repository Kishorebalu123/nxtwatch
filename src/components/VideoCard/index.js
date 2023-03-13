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
    <EachVideo>
      <ThumbnailImage src={thumbnailUrl} alt={title} />
      <DetailsCard>
        <ProfileLogo src={profileImageUrl} alt="profile" />
        <Description>
          <Title>{title}</Title>
          <Paragraph>
            <ChannelName>{channelName}</ChannelName>
            <Views>Views {viewCount}</Views>
            <PublishedAt>{publishedAt}</PublishedAt>
          </Paragraph>
        </Description>
      </DetailsCard>
    </EachVideo>
  )
}
export default VideoCard
