import RestaurantsList from '../../components/RestaurantsList'
// import Restaurant from '../../models/Restaurant'
// import restaurant1 from '../../assets/images/restaurant1.png'
// import restaurant2 from '../../assets/images/restaurante2.png'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { useGetRestaurantsQuery } from '../../services/api'

// const restaurantList: Restaurant[] = [
//   {
//     id: 1,
//     img: restaurant1,
//     name: 'Hioki Sushi',
//     description:
//       'Peça já o melhorPeça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
//     grade: '4.5',
//     type: 'Japonesa',
//     highlight: true
//   },
//   {
//     id: 2,
//     img: restaurant2,
//     name: 'La Dolce Vita Trattoria',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     grade: '5',
//     type: 'Italiana',
//     highlight: false
//   },
//   {
//     id: 3,
//     img: restaurant1,
//     name: 'Hioki Sushi',
//     description:
//       'Peça já o melhorPeça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
//     grade: '4.5',
//     type: 'Japonesa',
//     highlight: false
//   },
//   {
//     id: 4,
//     img: restaurant2,
//     name: 'La Dolce Vita Trattoria',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     grade: '5',
//     type: 'Italiana',
//     highlight: false
//   },
//   {
//     id: 5,
//     img: restaurant1,
//     name: 'Hioki Sushi',
//     description:
//       'Peça já o melhorPeça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
//     grade: '4.5',
//     type: 'Japonesa',
//     highlight: false
//   },
//   {
//     id: 6,
//     img: restaurant2,
//     name: 'La Dolce Vita Trattoria',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     grade: '5',
//     type: 'Italiana',
//     highlight: false
//   }
// ]

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
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

const Restaurants = () => {
  // const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
  //     (res) => res.json().then((data) => setRestaurants(data))
  //   )
  // }, [])

  const { data: restaurants } = useGetRestaurantsQuery()

  // if (restaurants) {
  //   return <RestaurantsList restaurants={restaurants} />
  // }

  return (
    <>
      <Header />
      <div className="container">
        {/* <RestaurantsList restaurants={restaurantList} /> */}
        {restaurants && <RestaurantsList restaurants={restaurants} />}
      </div>
    </>
  )
}

export default Restaurants
