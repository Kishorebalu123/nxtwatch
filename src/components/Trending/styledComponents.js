import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};
`
export const MainContainer = styled.div``
export const TrendingContainer = styled.div`
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
export const Trend = styled.h1``

export const FailureContainer = styled.div``
export const FailureImage = styled.img``
export const Heading = styled.h1``
export const Content = styled.p``
export const RetryBtn = styled.button``

export const Banner = styled.div`
  display: flex;
`
