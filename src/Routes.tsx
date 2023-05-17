import { Route, Routes } from 'react-router-dom'
import Restaurants from './pages/Restaurants'
import OptionRestaurants from './pages/OptionRestaurants'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Restaurants />} />
      <Route path="/restaurante/:id" element={<OptionRestaurants />} />
    </Routes>
  )
}

export default Rotas
