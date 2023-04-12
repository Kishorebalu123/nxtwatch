import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};
`
export const MainContainer = styled.div`
  display: flex;
`
export const SideCard = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const VideoDetailsContainer = styled.div`
  width: 100vw;
`
export const ReactPlayerContainer = styled.div``
export const DetailsContainer = styled.div``
export const Title = styled.p``
export const ViewsContainer = styled.div``
export const Views = styled.p``
export const Time = styled.p``
export const ReactionContainer = styled.ul``
export const Like = styled.button`
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
`

export const Dislike = styled.button`
  color: ${props => (props.liked ? '#2563eb' : '#64748b')};
`
export const Save = styled.div`
  display: flex;
`
export const SaveBtn = styled.button`
  color: ${props => (props.saved ? '#2563eb' : '#64748b')};
`
export const Line = styled.hr``
export const ChannelContainer = styled.div``
export const ChannelDetails = styled.div``
export const ChannelLogo = styled.img``

export const ChannelName = styled.p``
export const Subscribers = styled.p``
export const Description = styled.p``

export const FailureContainer = styled.div``
export const FailureImage = styled.img``
export const Heading = styled.h1``
export const Content = styled.p``
export const RetryBtn = styled.button``
