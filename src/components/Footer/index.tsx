import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa'
import { Container, Content, LinkLi, Links, Logo, PFooter } from './styles'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo src={logo} alt="Efood" />
        </Link>
        <Links>
          <LinkLi>
            <a href="#">
              <FaInstagram />
            </a>
          </LinkLi>
          <LinkLi>
            <a href="#">
              <FaFacebook />
            </a>
          </LinkLi>
          <LinkLi>
            <a href="#">
              <FaTwitterSquare />
            </a>
          </LinkLi>
        </Links>
        <PFooter>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </PFooter>
      </Content>
    </Container>
  )
}

export default Footer
