import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import * as yup from 'yup'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../OptionRestaurantItem'
import { RootReducer } from '../../store'

import { Btn, Container, Delivery, Item, OrderMessage, SideBar } from './styles'

import lixeira from '../../assets/images/lixeira.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [checkoutDelivery, setCheckoutDelivery] = useState(false)
  const [checkoutPayment, setCheckoutPayment] = useState(false)
  const [checkoutOrder, setCheckoutOrder] = useState(false)

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: yup.object({
      receiver: yup.string().required(),
      description: yup.string().required(),
      city: yup.string().required(),
      zipCode: yup.string().required(),
      number: yup.string().required()
      // complement: yup.string().required()
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const delivery = () => {
    return (
      <>
        <h3>
          {!checkoutPayment ? 'Entrega' : 'Pagamento - Valor a pagar R$ 190,90'}
        </h3>
        <form onSubmit={form.handleSubmit}>
          {!checkoutPayment ? (
            <>
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
              <Btn
                className="continuePayment"
                type="button"
                onClick={() => {
                  setCheckoutPayment(true)
                }}
              >
                Continuar com o pagamento
              </Btn>
              <Btn type="button" onClick={() => setCheckoutDelivery(false)}>
                Voltar para o carrinho
              </Btn>
            </>
          ) : (
            <>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={form.values.receiver}
                onChange={form.handleChange}
              />
              <div className="sameLine">
                <div>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="cardCode">CVV</label>
                  <input
                    type="text"
                    id="cardCode"
                    name="cardCode"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                  />
                </div>
              </div>
              <div className="sameLine">
                <div>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <input
                    type="text"
                    id="expiresMonth"
                    name="expiresMonth"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input
                    type="text"
                    id="expiresYear"
                    name="expiresYear"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                  />
                </div>
              </div>
              <Btn
                className="continuePayment"
                type="submit"
                onClick={() => setCheckoutOrder(true)}
              >
                Finalizar pagamento
              </Btn>
              <Btn type="button" onClick={() => setCheckoutPayment(false)}>
                Voltar para a edição de endereço
              </Btn>
            </>
          )}
        </form>
      </>
    )
  }

  return (
    <Container className={isOpen ? 'isOpen' : ''}>
      <SideBar>
        {items.length !== 0 ? (
          <>
            {!checkoutDelivery ? (
              <>
                {items.map((item) => (
                  <Item key={item.id}>
                    <img className="imgItem" src={item.foto} alt={item.nome} />
                    <div>
                      <h3 className="titleItem">{item.nome}</h3>
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
                  onClick={() => setCheckoutDelivery(true)}
                >
                  Continuar com a entrega
                </button>
              </>
            ) : (
              <>
                {!checkoutOrder ? (
                  <Delivery>{delivery()}</Delivery>
                ) : (
                  <OrderMessage>
                    <h3>Pedido realizado - ORDER_ID</h3>
                    <p>
                      Estamos felizes em informar que seu pedido já está em
                      processo de preparação e, em breve, será entregue no
                      endereço fornecido.
                    </p>
                    <p>
                      Gostaríamos de ressaltar que nossos entregadores não estão
                      autorizados a realizar cobranças extras.
                    </p>
                    <p>
                      Lembre-se da importância de higienizar as mãos após o
                      recebimento do pedido, garantindo assim sua segurança e
                      bem-estar durante a refeição.
                    </p>
                    <p>
                      Esperamos que desfrute de uma deliciosa e agradável
                      experiência gastronômica. Bom apetite!
                    </p>
                    <Btn type="button" onClick={() => dispatch(close())}>
                      Concluir
                    </Btn>
                  </OrderMessage>
                )}
              </>
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
