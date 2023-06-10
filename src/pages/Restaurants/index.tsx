import { useGetRestaurantsQuery } from '../../services/api'

import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'

const Restaurants = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  return (
    <>
      <Header />
      <div className="container">
        {restaurants && <RestaurantsList restaurants={restaurants} />}
      </div>
    </>
  )
}

export default Restaurants
