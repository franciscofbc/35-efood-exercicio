import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
// import * as yup from 'yup'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../OptionRestaurantItem'
import { RootReducer } from '../../store'

import { Container, Delivery, Item, SideBar } from './styles'

import lixeira from '../../assets/images/lixeira.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [checkout, setCheckout] = useState(false)

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema:
      // yup.object({
      // zipCode: yup.string().min(3, 'tres').required('obrigastorio')
      // }),
      {},
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <Container className={isOpen ? 'isOpen' : ''}>
      <SideBar>
        {items.length !== 0 ? (
          <>
            {!checkout ? (
              <>
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
                  <p>
                    {formataPreco(items.reduce((acc, cv) => acc + cv.preco, 0))}
                  </p>
                </div>
                <button
                  className="continueDelivery"
                  onClick={() => setCheckout(true)}
                >
                  Continuar com a entrega
                </button>
              </>
            ) : (
              <Delivery>
                <h3>Entrega</h3>
                <form onSubmit={form.handleSubmit}>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input
                    type="text"
                    id="receiver"
                    name="receiver"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                  />
                  <label htmlFor="">Endereço</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={form.values.description}
                    onChange={form.handleChange}
                  />
                  <label>Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                  />
                  <div className="sameLine">
                    <div>
                      <label>CEP</label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={form.values.zipCode}
                        onChange={form.handleChange}
                      />
                    </div>
                    <div>
                      <label>Número</label>
                      <input
                        type="text"
                        id="number"
                        name="number"
                        value={form.values.number}
                        onChange={form.handleChange}
                      />
                    </div>
                  </div>
                  <label>Complemente (Opcional)</label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                  />
                  <button className="btn continuePayment" type="submit">
                    Continuar com o pagamento
                  </button>
                  <button
                    className="btn"
                    type="button"
                    onClick={() => setCheckout(false)}
                  >
                    Voltar para o carrinho
                  </button>
                </form>
              </Delivery>
            )}
          </>
        ) : (
          <p className="emptyCart">
            O carrinho vazio, adicione pelo menos um produto para continuar com
            a compra
          </p>
        )}
      </SideBar>
      <div className="overlay" onClick={() => dispatch(close())}></div>
    </Container>
  )
}

export default Cart
