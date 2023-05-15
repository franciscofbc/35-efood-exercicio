import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import header from '../../assets/images/header.png'
import { Image, ImageRestaurant } from './styles'
import restaurant2 from '../../assets/images/restaurante2.png'

const HeaderRestaurant = () => {
  return (
    <>
      <Image style={{ backgroundImage: `url(${header})` }}>
        <div className="container">
          <p>Restaurantes</p>
          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
          <p>0 produto(s) no carrinho</p>
        </div>
      </Image>
      <ImageRestaurant style={{ backgroundImage: `url(${restaurant2})` }}>
        <div className="container">
          <p>Italiana</p>
          <h2>La Dolce Vita Trattoria</h2>
        </div>
      </ImageRestaurant>
    </>
  )
}

export default HeaderRestaurant
