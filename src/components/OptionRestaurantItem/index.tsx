import { Card, Description, Title } from './style'

type Props = {
  name: string
  description: string
  img: string
}

const OptionRestaurantItem = ({ name, description, img }: Props) => {
  return (
    <Card>
      <img src={img} alt={name} />
      <Title>{name}</Title>
      <Description>{description}</Description>
      <a href="#">Adicionar ao carrinho</a>
    </Card>
  )
}

export default OptionRestaurantItem
