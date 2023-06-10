import { useParams } from 'react-router-dom'

import OptionRestaurantList from '../../components/OptionRestaurantList'
import HeaderRestaurant from '../../components/HeaderRestaurant'

import { useGetRestaurantQuery } from '../../services/api'

const OptionRestaurants = () => {
  const params = useParams()

  const { data: restaurant } = useGetRestaurantQuery(params.id!)

  return (
    <>
      {restaurant && (
        <HeaderRestaurant
          capa={restaurant.capa}
          titulo={restaurant.titulo}
          tipo={restaurant.tipo}
        />
      )}
      <div className="container">
        {restaurant?.cardapio && (
          <OptionRestaurantList cardapio={restaurant.cardapio} />
        )}
      </div>
    </>
  )
}

export default OptionRestaurants
