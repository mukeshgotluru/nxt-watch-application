import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import AppContext from '../../context/AppContext'

import {
  Sider,
  SocialIcon,
  Contact,
  SideContainer,
  Icon,
  Title,
  StyledLink,
  ContactCard,
  Text,
} from './styledComponents'

export const tabList = [
  {
    title: 'Home',
    link: '/',
    Icon: AiFillHome,
  },
  {
    title: 'Trending',
    link: '/trending',
    Icon: HiFire,
  },
  {
    title: 'Gaming',
    link: '/gaming',
    Icon: SiYoutubegaming,
  },
  {
    title: 'Saved Videos',
    link: '/saved-videos',
    Icon: BiListPlus,
  },
]

const SideBar = () => (
  <AppContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <Sider isDark={isDark}>
          <SideContainer>
            <Link to="/">
              <StyledLink>
                <Icon>
                  <AiFillHome />
                </Icon>
                <Title>Home</Title>
              </StyledLink>
            </Link>
            <Link to="/trending">
              <StyledLink>
                <Icon>
                  <HiFire />
                </Icon>
                <Title>Trending</Title>
              </StyledLink>
            </Link>
            <Link to="/gaming">
              <StyledLink>
                <Icon>
                  <SiYoutubegaming />
                </Icon>
                <Title>Gaming</Title>
              </StyledLink>
            </Link>
            <Link to="/saved-videos">
              <StyledLink>
                <Icon>
                  <BiListPlus />
                </Icon>
                <Title>Saved Videos</Title>
              </StyledLink>
            </Link>
          </SideContainer>
          <ContactCard>
            <Contact isDark={isDark}>CONTACT US</Contact>
            <SocialIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <SocialIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <SocialIcon
              alt="linked in logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            />
            <Text isDark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </Text>
          </ContactCard>
        </Sider>
      )
    }}
  </AppContext.Consumer>
)

export default SideBar
