import {Component} from 'react'

import {GrClose} from 'react-icons/gr'

import Header from '../Header'
import Mode from '../Mode'

import {
  MainContainer,
  HomeContainer,
  PremiumContainer,
  PremiumLogo,
  AboutPremium,
  ImageCard,
  GetItNow,
  SearchContainer,
  SearchInput,
  SearchBtn,
  SearchIcon,
} from './styledComponents'

class Home extends Component {
  state = {dar: true, showPremiumCard: true}

  renderPremiumCard = () => {
    const {showPremiumCard} = this.state
    return (
      showPremiumCard && (
        <PremiumContainer>
          <ImageCard>
            <PremiumLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt=""
            />
            <GrClose />
          </ImageCard>
          <AboutPremium>
            Buy Nxt Watch Premiun prepaid plans with UPI
          </AboutPremium>
        </PremiumContainer>
      )
    )
  }

  render() {
    const {dar} = this.state
    return (
      <Mode.Consumer>
        {value => {
          const {darkMode} = value
          return (
            <MainContainer>
              <Header />
              <HomeContainer>
                {this.renderPremiumCard()}
                {/* this.renderVideosSection() */}
              </HomeContainer>
            </MainContainer>
          )
        }}
      </Mode.Consumer>
    )
  }
}
export default Home
