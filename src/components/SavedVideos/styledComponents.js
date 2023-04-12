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
export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
`
export const Banner = styled.div`
  display: flex;
`

export const EmptyView = styled.div``
export const Image = styled.img`
  width: 25%;
`
export const Heading = styled.h1``
export const Paragraph = styled.p``

export const ReactionContainer = styled.ul``
export const Like = styled.li``
export const LikeBtn = styled.button``
export const Dislike = styled(Like)``
export const Save = styled(Like)``
export const Line = styled.hr``
export const ChannelContainer = styled.div``
export const ChannelDetails = styled.div``
export const ChannelLogo = styled.img``

export const ChannelName = styled.p``
export const Subscribers = styled.p``
export const Description = styled.p``

export const Saved = styled.h1``
