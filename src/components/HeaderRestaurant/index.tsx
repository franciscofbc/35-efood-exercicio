import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import header from '../../assets/images/header.png'
import { Image, ImageRestaurant } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
// import restaurant2 from '../../assets/images/restaurante2.png'
import { open } from '../../store/reducers/cart'

type Props = {
  capa: string
  titulo: string
  tipo: string
}

const HeaderRestaurant = ({ capa, titulo, tipo }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  return (
    <>
      <Image style={{ backgroundImage: `url(${header})` }}>
        <div className="container">
          <p>Restaurantes</p>
          <Link to="/">
            <img src={logo} alt="Efood" />
          </Link>
          <a onClick={() => dispatch(open())}>
            {items.length} produto(s) no carrinho
          </a>
        </div>
      </Image>
      <ImageRestaurant style={{ backgroundImage: `url(${capa})` }}>
        <div className="container">
          <p>{tipo}</p>
          <h2>{titulo}</h2>
        </div>
      </ImageRestaurant>
    </>
  )
}

export default HeaderRestaurant
