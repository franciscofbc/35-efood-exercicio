import { Card, Description, Title } from './style'

type Props = {
  foto: string
  nome: string
  descricao: string
}

const OptionRestaurantItem = ({ foto, nome, descricao }: Props) => {
  return (
    <Card>
      <img src={foto} alt={nome} />
      <Title>{nome}</Title>
      <Description>{descricao}</Description>
      <a href="#">Adicionar ao carrinho</a>
    </Card>
  )
}

export default OptionRestaurantItem
