import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { open, add } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import * as S from './style'

import close from '../../assets/images/close.png'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const OptionRestaurantItem = ({
  foto,
  preco,
  id,
  nome,
  descricao,
  porcao
}: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      <S.Card>
        <img src={foto} alt={nome} />
        <S.Title>{nome}</S.Title>
        {/* <Description>{getDescricao(descricao)}</Description> */}
        <S.Description>{descricao}</S.Description>
        <a onClick={() => setIsVisible(true)}>Mais detalhes</a>
      </S.Card>
      {isVisible && (
        <S.Modal>
          <S.ModalContent className="container">
            <S.FotoCardapio src={foto} alt={nome} />
            <div>
              <h2 className="descriptionTitle">{nome}</h2>
              <p className="descriptionText">{descricao}</p>
              <p className="descriptionText">{`Serve: de ${porcao}`}</p>
              <a
                className="addCart"
                onClick={() => {
                  setIsVisible(false)
                  dispatch(open())
                  dispatch(add({ foto, preco, id, nome, descricao, porcao }))
                }}
              >{`Adicionar ao carrinho - ${parseToBrl(preco)}`}</a>
            </div>
            <S.ImgFechar
              src={close}
              alt="Fechar"
              onClick={() => setIsVisible(false)}
            />
          </S.ModalContent>
          <div className="overlay" onClick={() => setIsVisible(false)}></div>
        </S.Modal>
      )}
    </>
  )
}

export default OptionRestaurantItem
