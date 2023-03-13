import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
`
export const HomeContainer = styled.div``

export const PremiumContainer = styled.div`
  padding: 30px 40px 0px 30px;

  background-size: cover;

  @media screen and (min-width: 576px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-position: 5rem;
  }
`

export const ImageCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PremiumLogo = styled.img`
  width: 150px;
`

export const AboutPremium = styled.p`
  font-size: 18px;
  width: 200px;
`

export const GetItNow = styled.button`
  background-color: transparent;
  border: 1px solid #475569;
  height: 36px;
  width: 110px;
  margin-top: 10px;
`
export const VideosContainer = styled.div``

export const SearchContainer = styled.div`
  display: flex;
  margin: 40px 20px 20px 20px;
`

export const SearchBtn = styled.button`
  width: 70px;
  font-size: 15px;
  border: 0.5px solid #cbd5e1;
  color: #7e858e;
  background-color: transparent;
`

export const SearchIcon = styled.img``

export const SearchInput = styled.input`
  width: 100%;
  height: 35px;
  border: 0.6px solid #cbd5e1;
  padding-left: 20px;
  outline: none;
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
`
