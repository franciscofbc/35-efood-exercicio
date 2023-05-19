import { Container } from './styles'
// import Restaurant from '../../models/Restaurant'
import RestaurantItem from '../RestaurantItem'
import { Restaurant } from '../../pages/Restaurants'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  return (
    <Container className="container">
      {restaurants.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          capa={restaurant.capa}
          tipo={restaurant.tipo}
          titulo={restaurant.titulo}
          avaliacao={restaurant.avaliacao}
          descricao={restaurant.descricao}
          destacado={restaurant.destacado}
          id={restaurant.id}
        />
      ))}
    </Container>
  )
}

export default RestaurantsList
