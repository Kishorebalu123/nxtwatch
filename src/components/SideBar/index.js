import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ModeContext from '../../context/ModeContext'

import {
  Categories,
  EachCategory,
  EachItem,
  Name,
  BottomCard,
  SideBarBg,
  Contact,
  SocialCard,
  SocialImage,
  EndDescription,
  Icon,
} from './styledComponents'

const categoriesList = [
  {id: 'HOME', name: 'Home', path: '/', icon: <AiFillHome />},
  {id: 'TRENDING', name: 'Trending', path: '/trending', icon: <HiFire />},
  {id: 'GAMING', name: 'Gaming', path: '/gaming', icon: <SiYoutubegaming />},
  {
    id: 'SAVED_VIDEOS',
    name: 'Saved videos',
    path: '/saved-videos',
    icon: <MdPlaylistAdd />,
  },
]

const SideBar = () => (
  <ModeContext.Consumer>
    {value => {
      const {darkMode, activeTab, changeTab} = value
      //    console.log(activeTab)
      return (
        <SideBarBg mode={darkMode}>
          <Categories>
            {categoriesList.map(eachCategory => (
              <Link to={eachCategory.path}>
                <EachCategory
                  key={eachCategory.id}
                  active={activeTab === eachCategory.id}
                  mode={darkMode}
                  onClick={() => {
                    changeTab(eachCategory.id)
                  }}
                >
                  <EachItem mode={darkMode}>
                    <Icon active={activeTab === eachCategory.id}>
                      {eachCategory.icon}
                    </Icon>

                    <Name mode={darkMode} active={activeTab}>
                      {eachCategory.name}
                    </Name>
                  </EachItem>
                </EachCategory>
              </Link>
            ))}
          </Categories>
          <BottomCard>
            <Contact mode={darkMode}>CONTACT US</Contact>
            <SocialCard>
              <SocialImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                alt="facebook logo"
              />
              <SocialImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialCard>
            <EndDescription mode={darkMode}>
              Enjoy! Now to see your channels and recommendations!
            </EndDescription>
          </BottomCard>
        </SideBarBg>
      )
    }}
  </ModeContext.Consumer>
)

export default SideBar
