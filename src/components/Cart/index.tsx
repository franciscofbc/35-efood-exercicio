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
  // const [flag, setFlag] = useState('')

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },

    validationSchema: yup.object({
      receiver: yup.string().required(),
      description: yup.string().required(),
      city: yup.string().required(),
      zipCode: yup.string().required(),
      number: yup.string().required(),
      complement: yup.string(),

      cardName: yup
        .string()
        .when((values, schema) =>
          checkoutPayment ? schema.required() : schema
        ),
      cardNumber: yup
        .string()
        .when((values, schema) =>
          checkoutPayment ? schema.required() : schema
        ),
      cardCode: yup
        .string()
        .when((values, schema) =>
          checkoutPayment ? schema.required() : schema
        ),
      expiresMonth: yup
        .string()
        .when((values, schema) =>
          checkoutPayment ? schema.required() : schema
        ),
      expiresYear: yup
        .string()
        .when((values, schema) =>
          checkoutPayment ? schema.required() : schema
        )
    }),

    onSubmit: (values) => {
      console.log(values)
    }
  })

  const hasAnError = (fieldName: string) => {
    const touched = fieldName in form.touched
    const error = fieldName in form.errors
    return error && touched
  }

  const hasAnErrorMessage = (fieldName: string, message?: string) => {
    // const touched = fieldName in form.touched
    const error = fieldName in form.errors
    // if (error && touched) return message
    if (error) return message
    return ''
  }

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
                onBlur={form.handleBlur}
                autoFocus
                className={hasAnError('receiver') ? 'hasAnError' : ''}
              />
              {/* <small className="errorMessage">
                {hasAnErrorMessage('receiver', form.errors.receiver)}
              </small> */}
              <label htmlFor="description">Endereço</label>
              <input
                type="text"
                id="description"
                name="description"
                value={form.values.description}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={hasAnError('description') ? 'hasAnError' : ''}
              />
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={hasAnError('city') ? 'hasAnError' : ''}
              />
              <div className="sameLine">
                <div>
                  <label htmlFor="zipCode">CEP</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={hasAnError('zipCode') ? 'hasAnError' : ''}
                  />
                </div>
                <div>
                  <label htmlFor="number">Número</label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={hasAnError('number') ? 'hasAnError' : ''}
                  />
                  {/* <small className={flag}>
                    {hasAnErrorMessage('number', form.errors.number)}
                  </small> */}
                </div>
              </div>
              <label htmlFor="complement">Complemente (Opcional)</label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <Btn
                className="continuePayment"
                type="button"
                onClick={() => {
                  form.isValid && setCheckoutPayment(true)
                  // ? setCheckoutPayment(true)
                  // : setFlag('errorMessage')
                  console.log(form)
                  console.log(form.touched)
                  console.log(form.errors)
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
                value={form.values.cardName}
                onChange={form.handleChange}
              />
              <div className="sameLine">
                <div>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="cardCode">CVV</label>
                  <input
                    type="text"
                    id="cardCode"
                    name="cardCode"
                    value={form.values.cardCode}
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
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input
                    type="text"
                    id="expiresYear"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                  />
                </div>
              </div>
              <Btn
                className="continuePayment"
                type="submit"
                onClick={() => {
                  // setCheckoutOrder(true)
                }}
              >
                Finalizar pagamento
              </Btn>
              <Btn
                type="button"
                onClick={() => {
                  setCheckoutPayment(false)
                }}
              >
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
