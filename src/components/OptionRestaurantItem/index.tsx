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
  nome: string
  descricao: string
}

const OptionRestaurantItem = ({ foto, nome, descricao }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <Card>
        <img src={foto} alt={nome} />
        <Title>{nome}</Title>
        <Description>{descricao}</Description>
        <a onClick={() => setIsVisible(true)}>Mais detalhes</a>
      </Card>
      {isVisible && (
        <Modal>
          <ModalContent className="container">
            <FotoCardapio src={foto} alt={nome} />
            <div>
              <h2>{nome}</h2>
              <p>{descricao}</p>
              <a href="">Adcionar ao carrinho</a>
            </div>
            <ImgFechar
              src={close}
              alt="Fechar"
              onClick={() => setIsVisible(false)}
            />
          </ModalContent>
        </Modal>
      )}
    </>
  )
}

export default OptionRestaurantItem
