// import OptionFood from '../../models/OptionFood'
import OptionRestaurantItem from '../OptionRestaurantItem'
import { Container } from './styles'

// type Props = {
//   options: OptionFood[]
// }

type Props = {
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

// const OptionRestaurantList = ({ options }: Props) => {
const OptionRestaurantList = ({ cardapio }: Props) => {
  return (
    <Container className="container">
      {cardapio.map((option) => (
        <OptionRestaurantItem
          key={option.id}
          foto={option.foto}
          preco={option.preco}
          id={option.id}
          nome={option.nome}
          descricao={option.descricao}
          porcao={option.porcao}
        />
      ))}
    </Container>
  )
}

export default OptionRestaurantList
