import { useState } from 'react'
import {
  Card,
  Description,
  FotoCardapio,
  ImgFechar,
  Modal,
  ModalContent,
  Title
} from './style'
import close from '../../assets/images/close.png'

type Props = {
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const getDescricao = (descricao: string) => {
  if (descricao.length > 150) {
    return descricao.slice(0, 150) + ' (...)'
  }
  return descricao
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const OptionRestaurantItem = ({
  foto,
  preco,
  nome,
  descricao,
  porcao
}: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <Card>
        <img src={foto} alt={nome} />
        <Title>{nome}</Title>
        <Description>{getDescricao(descricao)}</Description>
        <a onClick={() => setIsVisible(true)}>Mais detalhes</a>
      </Card>
      {isVisible && (
        <Modal>
          <ModalContent className="container">
            <FotoCardapio src={foto} alt={nome} />
            <div>
              <h2>{nome}</h2>
              <p>{descricao}</p>
              <p>{`Serve: de ${porcao}`}</p>
              <a>{`Adicionar ao carrinho - ${formataPreco(preco)}`}</a>
            </div>
            <ImgFechar
              src={close}
              alt="Fechar"
              onClick={() => setIsVisible(false)}
            />
          </ModalContent>
          <div className="overlay" onClick={() => setIsVisible(false)}></div>
        </Modal>
      )}
    </>
  )
}

export default OptionRestaurantItem
