import { useSelector, useDispatch } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { Container, Item, SideBar } from './styles'

import lixeira from '../../assets/images/lixeira.png'
import { formataPreco } from '../OptionRestaurantItem'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  return (
    <Container className={isOpen ? 'isOpen' : ''}>
      <SideBar>
        {items.map((item) => (
          <Item key={item.id}>
            <img className="imgItem" src={item.foto} alt={item.nome} />
            <div>
              <h3>{item.nome}</h3>
              <p>{formataPreco(item.preco)}</p>
            </div>
            <img
              className="imgLixeira"
              src={lixeira}
              alt=""
              onClick={() => dispatch(remove(item.id))}
            />
          </Item>
        ))}
        <div className="totalValue">
          <p>Valor total</p>
          <p>{formataPreco(items.reduce((acc, cv) => acc + cv.preco, 0))}</p>
        </div>
        <button>Continuar com a entrega</button>
      </SideBar>
      <div className="overlay" onClick={() => dispatch(close())}></div>
    </Container>
  )
}

export default Cart
