import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import * as yup from 'yup'
import InputMask from 'react-input-mask'

import { close, remove, clear } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { getTotalPrice, parseToBrl } from '../../utils'

import { Btn, Container, Delivery, Item, OrderMessage, SideBar } from './styles'

import lixeira from '../../assets/images/lixeira.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [checkout, setCheckout] = useState({
    delivery: false,
    payment: false,
    order: false
  })
  const [purchase, { data, isSuccess, isLoading, reset }] =
    usePurchaseMutation()

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const resetSidebar = () => {
    setCheckout({
      delivery: false,
      payment: false,
      order: false
    })
  }

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
          checkout.payment ? schema.required() : schema
        ),
      cardNumber: yup
        .string()
        .when((values, schema) =>
          checkout.payment ? schema.required() : schema
        ),
      cardCode: yup
        .string()
        .when((values, schema) =>
          checkout.payment ? schema.required() : schema
        ),
      expiresMonth: yup
        .string()
        .when((values, schema) =>
          checkout.payment ? schema.required() : schema
        ),
      expiresYear: yup
        .string()
        .when((values, schema) =>
          checkout.payment ? schema.required() : schema
        )
    }),

    onSubmit: (values, { resetForm }) => {
      purchase({
        products: items.map((item) => ({ id: item.id, price: item.preco })),

        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
      resetForm()
    }
  })

  const hasAnError = (fieldName: string) => {
    // const touched = fieldName in form.touched
    const error = fieldName in form.errors
    // return error && touched
    return error
  }

  // const hasAnErrorMessage = (fieldName: string, message?: string) => {
  //   // const touched = fieldName in form.touched
  //   const error = fieldName in form.errors
  //   // if (error && touched) return message
  //   if (error) return message
  //   return ''
  // }

  const delivery = () => {
    return (
      <>
        <h3 className="titleSideBar">
          {!checkout.payment
            ? 'Entrega'
            : `Pagamento - Valor a pagar ${parseToBrl(getTotalPrice(items))}`}
        </h3>
        <form onSubmit={form.handleSubmit}>
          {!checkout.payment ? (
            <>
              <div className="deliveryDiv">
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  autoFocus
                  type="text"
                  id="receiver"
                  name="receiver"
                  value={form.values.receiver}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={hasAnError('receiver') ? 'hasAnError' : ''}
                />
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
                    <InputMask
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={hasAnError('zipCode') ? 'hasAnError' : ''}
                      mask="99999-999"
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
                  className="continueButton"
                  type="button"
                  onClick={() => {
                    form.isValid && setCheckout({ ...checkout, payment: true })
                  }}
                >
                  Continuar com o pagamento
                </Btn>
                <Btn
                  type="button"
                  onClick={() => {
                    setCheckout({ ...checkout, delivery: false })
                  }}
                >
                  Voltar para o carrinho
                </Btn>
              </div>
            </>
          ) : (
            <>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                // autoFocus
                type="text"
                id="cardName"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={hasAnError('cardName') ? 'hasAnError' : ''}
              />
              <div className="sameLine">
                <div>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={hasAnError('cardNumber') ? 'hasAnError' : ''}
                    mask="9999 9999 9999 9999"
                  />
                </div>
                <div>
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    type="text"
                    id="cardCode"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={hasAnError('cardCode') ? 'hasAnError' : ''}
                    mask="999"
                  />
                </div>
              </div>
              <div className="sameLine">
                <div>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresMonth"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={hasAnError('expiresMonth') ? 'hasAnError' : ''}
                    mask="99"
                  />
                </div>
                <div>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresYear"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={hasAnError('expiresYear') ? 'hasAnError' : ''}
                    mask="99"
                  />
                </div>
              </div>
              <Btn
                className="continueButton"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
              </Btn>
              <Btn
                type="button"
                onClick={() => {
                  setCheckout({ ...checkout, payment: false })
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

  const orderMessage = () => {
    return (
      <>
        <h3 className="titleOrderMessage">
          Pedido realizado - {data?.orderId}
        </h3>
        <p className="textOrderMessage">
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p className="textOrderMessage">
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p className="textOrderMessage">
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p className="textOrderMessage">
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <Btn
          type="button"
          onClick={() => {
            dispatch(close())
            resetSidebar()
            reset()
          }}
        >
          Concluir
        </Btn>
      </>
    )
  }

  return (
    <Container className={isOpen ? 'isOpen' : ''}>
      <SideBar>
        {isSuccess && data ? (
          <>
            <OrderMessage>{orderMessage()}</OrderMessage>
          </>
        ) : (
          <>
            {items.length !== 0 ? (
              <>
                {!checkout.delivery ? (
                  <>
                    <Item>
                      {items.map((item) => (
                        <li className="individualItem" key={item.id}>
                          <img
                            className="imgItem"
                            src={item.foto}
                            alt={item.nome}
                          />
                          <div>
                            <h3 className="titleItem">{item.nome}</h3>
                            <p className="priceIndividualItem">
                              {parseToBrl(item.preco)}
                            </p>
                          </div>
                          <img
                            className="imgLixeira"
                            src={lixeira}
                            alt=""
                            onClick={() => dispatch(remove(item.id))}
                          />
                        </li>
                      ))}
                    </Item>
                    <div className="totalValue">
                      <p className="totalValuePrice">Valor total</p>
                      <p className="totalValuePrice">
                        {parseToBrl(getTotalPrice(items))}
                      </p>
                    </div>
                    <button
                      className="continueDeliveryButton"
                      onClick={() => {
                        setCheckout({ ...checkout, delivery: true })
                      }}
                    >
                      Continuar com a entrega
                    </button>
                  </>
                ) : (
                  <>{!checkout.order && <Delivery>{delivery()}</Delivery>}</>
                )}
              </>
            ) : (
              <p className="emptyCartMessage">
                O carrinho vazio, adicione pelo menos um produto para continuar
                com a compra
              </p>
            )}
          </>
        )}
      </SideBar>
      <div className="overlay" onClick={() => dispatch(close())}></div>
    </Container>
  )
}

export default Cart
