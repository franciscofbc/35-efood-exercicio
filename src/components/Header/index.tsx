import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import header from '../../assets/images/header.png'
import { Container, Image, Logo, Title } from './styles'

const Header = () => {
  return (
    <Image style={{ backgroundImage: `url(${header})` }}>
      <Container>
        <Link to="/">
          <Logo src={logo} alt="Efood" />
        </Link>
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </Container>
    </Image>
  )
}

export default Header
