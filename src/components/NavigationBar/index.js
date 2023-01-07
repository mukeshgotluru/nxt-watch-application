import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import './index.css'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavigationLgContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  ContactNote,
  ContactImage,
  NavigationSmallContainer,
  NavBar,
} from './styledComponents'

class NavigationBar extends Component {
  renderTabItems = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, activeTab, changeTab} = value
        const bgColor = isDarkTheme ? '#231f20' : '#ffffff'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

        const onClickTabHome = () => {
          changeTab('Home')
        }
        const onClickTabTrending = () => {
          changeTab('Trending')
        }
        const onClickTabGaming = () => {
          changeTab('Gaming')
        }
        const onClickTabSaved = () => {
          changeTab('Saved')
        }

        return (
          <NavBar>
            <NavigationLgContainer bgColor={bgColor}>
              <NavOptions>
                <Link to="/" className="link">
                  <NavLink>
                    <NavLinkContainer
                      key="home"
                      bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                      onClick={onClickTabHome}
                    >
                      <AiFillHome
                        size={30}
                        color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                      />
                      <NavText color={textColor}>Home</NavText>
                    </NavLinkContainer>
                  </NavLink>
                </Link>
                <Link to="/trending" className="link">
                  <NavLink>
                    <NavLinkContainer
                      key="trending"
                      bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                      onClick={onClickTabTrending}
                    >
                      <HiFire
                        size={30}
                        color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                      />
                      <NavText color={textColor}>Trending</NavText>
                    </NavLinkContainer>
                  </NavLink>
                </Link>
                <Link to="/gaming" className="link">
                  <NavLink>
                    <NavLinkContainer
                      key="gaming"
                      bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                      onClick={onClickTabGaming}
                    >
                      <SiYoutubegaming
                        size={30}
                        color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                      />
                      <NavText color={textColor}>Gaming</NavText>
                    </NavLinkContainer>
                  </NavLink>
                </Link>
                <Link to="/saved-videos" className="link">
                  <NavLink>
                    <NavLinkContainer
                      key="saved"
                      bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                      onClick={onClickTabSaved}
                    >
                      <CgPlayListAdd
                        size={30}
                        color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                      />
                      <NavText color={textColor}>Saved Videos</NavText>
                    </NavLinkContainer>
                  </NavLink>
                </Link>
              </NavOptions>
              <ContactInfo>
                <ContactHeading color={textColor}>CONTACT US</ContactHeading>
                <ContactIcons>
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactIcons>
                <ContactNote color={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactNote>
              </ContactInfo>
            </NavigationLgContainer>
            <NavigationSmallContainer bgColor={bgColor}>
              <NavLink to="/">
                <AiFillHome
                  size={30}
                  onClick={onClickTabHome}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/trending">
                <HiFire
                  size={30}
                  onClick={onClickTabTrending}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/gaming">
                <SiYoutubegaming
                  size={30}
                  onClick={onClickTabGaming}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
              <NavLink to="/saved-videos">
                <CgPlayListAdd
                  size={30}
                  onClick={onClickTabSaved}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                />
              </NavLink>
            </NavigationSmallContainer>
          </NavBar>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return <>{this.renderTabItems()}</>
  }
}

export default NavigationBar
