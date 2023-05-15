import { Container } from './styles'
import Restaurant from '../../models/Restaurant'
import RestaurantItem from '../RestaurantItem'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => {
  return (
    <Container>
      {restaurants.map((restaurant) => (
        <RestaurantItem
          key={restaurant.id}
          img={restaurant.img}
          type={restaurant.type}
          name={restaurant.name}
          grade={restaurant.grade}
          description={restaurant.description}
          highlight={restaurant.highlight}
        />
      ))}
    </Container>
  )
}

export default RestaurantsList
