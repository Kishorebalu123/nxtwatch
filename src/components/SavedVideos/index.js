import {Component} from 'react'

import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoCard from '../VideoCard'
import ModeContext from '../../context/ModeContext'

import {
  Container,
  MainContainer,
  VideosList,
  SideCard,
  EmptyView,
  Image,
  Saved,
  Heading,
  Paragraph,
  Banner,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkMode, savedVideos} = value

          return (
            <Container mode={darkMode} data-testid="savedVideos">
              <Header />
              <MainContainer>
                <SideCard>
                  <SideBar />
                </SideCard>

                {savedVideos.length > 0 ? (
                  <>
                    <Banner data-testid="banner">
                      <MdPlaylistAdd />
                      <Saved>Saved Videos</Saved>
                    </Banner>
                    <VideosList>
                      {savedVideos.map(eachVideo => (
                        <VideoCard videoData={eachVideo} key={eachVideo.id} />
                      ))}
                    </VideosList>
                  </>
                ) : (
                  <EmptyView>
                    <Image
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                      alt="no saved videos"
                    />
                    <Heading>NO saved videos found</Heading>
                    <Paragraph>
                      You can save your videos while watching them
                    </Paragraph>
                  </EmptyView>
                )}
              </MainContainer>
            </Container>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}
export default SavedVideos
