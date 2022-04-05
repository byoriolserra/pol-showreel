import styled from 'styled-components'
import Instagram from './assets/instagram.png'
import Youtube from './assets/youtube.png'
import Mail from './assets/mail.png'

function App() {
  return (
    <AppContainer>
      <Header>
        <h1>POL ÁLVARO |<span> Showreel</span></h1>
        <ul>
          <li><a href="https://www.instagram.com/pol_alvaro/" target="_blank" rel="noreferrer"><img src={Instagram} alt='' ></img></a></li>
          <li><a href="https://www.youtube.com/channel/UC1WXOxiVaZdHk42YlAPamlw" target="_blank" rel="noreferrer"><img src={Youtube} alt='' ></img></a></li>
          <li><a href="mailto:alvaropuigpol@gmail.com" target="_blank" rel="noreferrer"><img src={Mail} alt='' ></img></a></li>
        </ul>
      </Header>
      <Video>
        <iframe title='Showreel' src="https://www.youtube.com/embed/PsCntoRL9B4?autoplay=1&mute=1&modestbranding=1&rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>
      </Video>
      <Footer>
        <h2>CONTACTA'M</h2>
        <ul>
        <li><a href="https://www.instagram.com/pol_alvaro/" target="_blank" rel="noreferrer"><img src={Instagram} alt='' ></img></a></li>
          <li><a href="https://www.youtube.com/channel/UC1WXOxiVaZdHk42YlAPamlw" target="_blank" rel="noreferrer"><img src={Youtube} alt='' ></img></a></li>
          <li><a href="mailto:alvaropuigpol@gmail.com" target="_blank" rel="noreferrer"><img src={Mail} alt='' ></img></a></li>
        </ul>
      </Footer>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  margin: 0;
  background-color: black;
  color: white;
`
const Header = styled.header`
  @media only screen and (min-width: 426px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15%;
  }
  h1 {
    cursor: default;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
    padding: 20px 0;
  }
  span {
    font-size: 0.8rem;
    font-weight: 500;
  }
  ul {
    display: none;
    list-style: none;
    @media only screen and (min-width: 426px) {
      display: flex;
      align-items: center;
      img {
        cursor: pointer;
        width: 25px;
        height: 25px;
        margin-left: 12px;
        opacity: 0.7;
        transition: 0.3s;
        :hover {
          opacity: 1;
        }
      }
  }
`

const Video = styled.section`
  display: flex;
  justify-content: center;
  iframe {
    height: 300px;
    width: 100%;
    margin: 10px auto;
    @media only screen and (min-width: 426px) {
      width: 65%;
      height: 500px;
    }
  }
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    cursor: default;
    font-size: 0.9rem;
    font-weight: 600;
    margin: 20px 0;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    img {
      cursor: pointer;
      width: 25px;
      height: 25px;
      margin: 0 6px;
      opacity: 0.7;
      transition: 0.3s;
        :hover {
          opacity: 1;
        }
    }
  }
`
