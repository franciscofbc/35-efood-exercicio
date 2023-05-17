import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import OptionRestaurantList from '../../components/OptionRestaurantList'
// import OptionFood from '../../models/OptionFood'
// import pizza from '../../assets/images/pizza.png'
import HeaderRestaurant from '../../components/HeaderRestaurant'
import { Restaurant } from '../Restaurants'

// const optionList: OptionFood[] = [
//   {
//     id: 1,
//     name: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     img: pizza
//   },
//   {
//     id: 2,
//     name: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     img: pizza
//   },
//   {
//     id: 3,
//     name: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     img: pizza
//   },
//   {
//     id: 4,
//     name: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     img: pizza
//   },
//   {
//     id: 5,
//     name: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     img: pizza
//   },
//   {
//     id: 6,
//     name: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     img: pizza
//   }
// ]

const OptionRestaurants = () => {
  const [restaurant, setRestaurant] = useState<Restaurant>()
  const params = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${params.id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
  }, [])

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
