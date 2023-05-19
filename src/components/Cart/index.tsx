import { useSelector, useDispatch } from 'react-redux'
import { close } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { Container, Item, SideBar } from './styles'

import pizza from '../../assets/images/pizza.png'
import lixeira from '../../assets/images/lixeira.png'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  return (
    <Container className={isOpen ? 'isOpen' : ''}>
      <SideBar>
        <Item>
          <img className="imgItem" src={pizza} alt="" />
          <div>
            <h3>pizza teste</h3>
            <p>R$ 150,00</p>
          </div>
          <img className="imgLixeira" src={lixeira} alt="" />
        </Item>
        <Item>
          <img className="imgItem" src={pizza} alt="" />
          <div>
            <h3>pizza teste</h3>
            <p>R$ 150,00</p>
          </div>
          <img className="imgLixeira" src={lixeira} alt="" />
        </Item>
        <Item>
          <img className="imgItem" src={pizza} alt="" />
          <div>
            <h3>pizza teste</h3>
            <p>R$ 150,00</p>
          </div>
          <img className="imgLixeira" src={lixeira} alt="" />
        </Item>
        <div className="totalValue">
          <p>Valor total</p>
          <p>R$ 182,70</p>
        </div>
        <button>Continuar com a entrega</button>
      </SideBar>
      <div className="overlay" onClick={() => dispatch(close())}></div>
    </Container>
  )
}

export default Cart
