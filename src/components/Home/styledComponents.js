import styled from 'styled-components'

export const MainContainer = styled.div`
  max-height: 100vh;
`
export const HomeContainer = styled.div`
  display: flex;
`
export const SideBar = styled.div`
  min-width: 150px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const Card = styled.div`
  overflow-y: auto;
  max-height: 700px;
`
export const PremiumContainer = styled.div`
  padding: 30px 40px 0px 30px;
  margin-bottom: 40px;
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
export const VideosSection = styled.div`
  background-color: ${props => props.mode && '#181818'};

  color: ${props => props.mode && '#ffffff'};
`
export const VideosContainer = styled.div``

export const SearchContainer = styled.div`
  display: flex;
  margin: 0px 20px 20px 20px;
  padding-top: 20px;

  @media screen and (min-width: 576px) {
    max-width: 450px;
  }
`

export const SearchBtn = styled.button`
  width: 70px;
  font-size: 15px;
  border: 0.3px solid #cbd5e1;
  color: #7e858e;
  border-color: ${props => props.mode && '#424242'};
  background-color: ${props => (props.mode ? '#212121' : 'transparent')};
`

export const SearchIcon = styled.img``

export const SearchInput = styled.input`
  width: 100%;
  height: 35px;
  border: 0.6px solid #cbd5e1;
  padding-left: 20px;
  outline: none;
  border-color: ${props => props.mode && '#424242'};
  background-color: ${props => props.mode && '#181818'};
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;

  @media screen and (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
  }
`
export const Categories = styled.div`
  padding: 10px;
  color: red;
`
export const EachCategory = styled.div`
  margin-bottom: 10px;
  color: #606060;
`
export const CategoryButton = styled.button`
  margin-left: 10px;
  border: 0;
  background-color: transparent;
`
