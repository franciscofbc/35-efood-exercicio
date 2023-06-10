import * as S from './styles'
import star from '../../assets/images/star-favorite.png'

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
  return (
    <S.Card>
      <img src={capa} alt={titulo} />
      <S.Tags>
        {destacado && <S.Tag>Destaques da semana</S.Tag>}
        <S.Tag>{tipo}</S.Tag>
      </S.Tags>
      <S.CardDescription>
        <S.Header>
          <S.Title>{titulo}</S.Title>
          <S.Star>
            <S.Title>{avaliacao}</S.Title>
            <img src={star} alt="Estrela" />
          </S.Star>
        </S.Header>
        <S.Description>{descricao}</S.Description>
        <S.More to={`/restaurante/${id}`}>Saiba mais</S.More>
      </S.CardDescription>
    </S.Card>
  )
}

export default RestaurantItem
