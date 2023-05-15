import {
  Card,
  CardDescription,
  Description,
  Header,
  More,
  Star,
  Tag,
  Tags,
  Title
} from './styles'
import star from '../../assets/images/star-favorite.png'

type Props = {
  img: string
  name: string
  description: string
  grade: string
  type: string
  highlight: boolean
}

const RestaurantItem = ({
  img,
  name,
  description,
  grade,
  type,
  highlight
}: Props) => {
  return (
    <Card>
      <img src={img} alt={name} />
      <Tags>
        {highlight && <Tag>Destaques da semana</Tag>}
        <Tag>{type}</Tag>
      </Tags>
      <CardDescription>
        <Header>
          <Title>{name}</Title>
          <Star>
            <Title>{grade}</Title>
            <img src={star} alt="Estrela" />
          </Star>
        </Header>
        <Description>{description}</Description>
        <More to="test">Saiba mais</More>
      </CardDescription>
    </Card>
  )
}

export default RestaurantItem
