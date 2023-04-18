import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

// import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

import ModeContext from '../../context/ModeContext'
import ReactPopUp from '../ReactPopUp'
import LogoutPopup from '../LogoutPopup'

import {
  NavContainer,
  NavItems,
  NavItem,
  WebsiteLogo,
  Menu,
  Profile,
  ModeBtn,
} from './styledComponents'

class Header extends Component {
  logoutBtn = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode, changeMode} = value
          const onClickBtn = () => {
            changeMode(!darkMode)
          }
          return (
            <>
              <NavContainer mode={darkMode}>
                <Link to="/">
                  <WebsiteLogo
                    src={
                      darkMode
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Link>
                <NavItems mode={darkMode}>
                  <ModeBtn
                    data-testid="theme"
                    mode={darkMode}
                    type="button"
                    onClick={onClickBtn}
                  >
                    {darkMode ? <FiSun /> : <FaMoon />}
                  </ModeBtn>
                  <NavItem>
                    <Menu>
                      <ReactPopUp mode={darkMode} />
                    </Menu>
                    <Profile
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                      alt="profile"
                    />
                  </NavItem>
                  <NavItem>
                    <LogoutPopup />
                  </NavItem>
                </NavItems>
              </NavContainer>
            </>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default withRouter(Header)
