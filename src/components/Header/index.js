import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut, FiSun} from 'react-icons/fi'
// import {FiSun} from 'react-icons/fi'

import Mode from '../Mode'

import {NavContainer, NavItems, NavItem, WebsiteLogo} from './styledComponents'

const Header = props => {
  const {history} = props
  return (
    <Mode.Consumer>
      {value => {
        const {darkMode, changeMode} = value

        const logoutBtn = () => {
          Cookies.remove('jwt_token')
          history.replace('/login')
        }
        const onChangeMode = () => {
          changeMode(!darkMode)
        }
        return (
          <NavContainer mode={darkMode}>
            <WebsiteLogo
              src={
                darkMode
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt=""
            />
            <NavItems>
              <NavItem onClick={onChangeMode}>
                {darkMode ? <FiSun /> : <FaMoon />}
              </NavItem>
              <NavItem>
                <GiHamburgerMenu />
              </NavItem>
              <NavItem>
                <FiLogOut onClick={logoutBtn} />
              </NavItem>
            </NavItems>
          </NavContainer>
        )
      }}
    </Mode.Consumer>
  )
}

export default withRouter(Header)
