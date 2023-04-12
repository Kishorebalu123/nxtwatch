import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};
`
export const MainContainer = styled.div``
export const GamingContainer = styled.div`
  display: flex;
`
export const SideCard = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const VideosContainer = styled.div``
export const VideosList = styled.ul`
  list-style-type: none;
`
export const EachItem = styled.li`
  text-decoration: none;
`
export const ThumbnailImage = styled.img`
  width: 25%;
`
export const Title = styled.p`
  color: black;
`
export const ViewsCount = styled.p`
  color: gray;
`

export const FailureContainer = styled.div``
export const FailureImage = styled.img``
export const Heading = styled.h1``
export const Content = styled.p``
export const RetryBtn = styled.button``

export const Game = styled.h1``

export const Banner = styled.div`
  display: flex;
`
