import OptionFood from '../../models/OptionFood'
import OptionRestaurantItem from '../OptionRestaurantItem'
import { Container } from './styles'

type Props = {
  options: OptionFood[]
}

const OptionRestaurantList = ({ options }: Props) => {
  return (
    <Container>
      {options.map((option) => (
        <OptionRestaurantItem
          key={option.id}
          img={option.img}
          name={option.name}
          description={option.description}
        />
      ))}
    </Container>
  )
}

export default OptionRestaurantList
