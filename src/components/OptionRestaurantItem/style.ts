import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.pink};
  padding: 8px;
  margin-bottom: 32px;

  a {
    color: ${colors.pink};
    background-color: ${colors.pinkFooter};
    text-decoration: none;
    display: block;
    text-align: center;
    padding: 4px;
    font-size: 14px;
    font-weight: bold;
  }
`

export const Title = styled.h2`
  color: ${colors.pinkFooter};
  margin-top: 8px;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 16px;
`
export const Description = styled.p`
  color: ${colors.pinkFooter};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`
