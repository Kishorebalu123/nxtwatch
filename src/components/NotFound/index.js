import ModeContext from '../../context/ModeContext'

import {NotFoundContainer, Image, Heading, Paragraph} from './styledComponents'

const NotFound = () => (
  <ModeContext.Consumer>
    {value => {
      const {darkMode} = value
      return (
        <NotFoundContainer>
          <Image
            src={
              darkMode
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            }
            alt="not found"
          />
          <Heading>Page Not Found</Heading>
          <Paragraph>
            We are sorry, the page you requested could not be found.
          </Paragraph>
        </NotFoundContainer>
      )
    }}
  </ModeContext.Consumer>
)
export default NotFound
