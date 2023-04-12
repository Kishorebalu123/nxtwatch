import ModeContext from '../../context/ModeContext'

import {
  FailureContainer,
  FailureImage,
  Heading,
  Paragraph,
  Retry,
} from './styledComponents'

const FailureView = () => (
  <ModeContext>
    {value => {
      const {darkMode} = value
      return (
        <FailureContainer>
          <FailureImage
            src={
              darkMode
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            }
          />
          <Heading>Oops! Something Went Wrong</Heading>
          <Paragraph>
            We are having some trouble to complete your request. Please try
            again
          </Paragraph>
          <Retry type="button">Retry</Retry>
        </FailureContainer>
      )
    }}
  </ModeContext>
)
