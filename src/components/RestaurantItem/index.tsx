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

// type Props = {
//   img: string
//   name: string
//   description: string
//   grade: string
//   type: string
//   highlight: boolean
// }

type Props = {
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  id: number
}

const RestaurantItem = ({
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 248) {
      return descricao.slice(0, 248) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={capa} alt={titulo} />
      <Tags>
        {destacado && <Tag>Destaques da semana</Tag>}
        <Tag>{tipo}</Tag>
      </Tags>
      <CardDescription>
        <Header>
          <Title>{titulo}</Title>
          <Star>
            <Title>{avaliacao}</Title>
            <img src={star} alt="Estrela" />
          </Star>
        </Header>
        <Description>{descricao}</Description>
        <More to={`/restaurante/${id}`}>Saiba mais</More>
      </CardDescription>
    </Card>
  )
}

export default RestaurantItem
