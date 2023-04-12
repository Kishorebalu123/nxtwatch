import styled from 'styled-components'

export const EachVideo = styled.li`
  @media screen and (min-width: 576px) {
    max-width: 280px;
    margin: 20px 30px 20px 15px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100vw;
  @media screen and (min-width: 576px) {
    width: 300px;
  }
`

export const DetailsCard = styled.div`
  display: flex;
  margin: 10px 10px 20px 10px;
`

export const Description = styled.div`
  margin-top: 0;
`

export const ProfileLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

export const Title = styled.p`
  margin: 0;
  color: ${props => (props.mode ? '#ffffff' : '#000000')};
  font-size: 15px;
`
export const Paragraph = styled.div`
  display: flex;
  color: #606060;
  padding: 0;
  list-style-type: disc;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
  width: 80%;
  align-items: center;
  @media screen and (min-width: 576px) {
    width: 70%;
  }
`

export const ChannelName = styled.p`
  font-size: 12px;
  @media screen and (min-width: 576px) {
    margin-right: 90px;
    margin-bottom: 8px;
    font-size: 13px;
  }
`

export const Views = styled.p`
  font-size: 12px;
  @media screen and (min-width: 576px) {
    list-style-type: none;
  }
`

export const PublishedAt = styled.p`
  font-size: 12px;
`
