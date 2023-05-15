import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  margin-bottom: 48px;
  position: relative;

  img {
    display: block;
  }
`
export const CardDescription = styled.div`
  border-bottom: 1px solid ${colors.pink};
  border-right: 1px solid ${colors.pink};
  border-left: 1px solid ${colors.pink};
  padding: 8px;
  font-size: 18px;
  color: ${colors.pink};
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`
export const Star = styled.div`
  display: flex;
  align-items: center;
`
export const Title = styled.h2`
  margin-right: 8px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 16px;
`
export const More = styled(Link)`
  background-color: ${colors.pink};
  padding: 4px 8px;
  text-decoration: none;
  color: ${colors.pinkFooter};
  font-weight: bold;
  font-size: 14px;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`
export const Tag = styled.p`
  background-color: ${colors.pink};
  padding: 4px 8px;
  color: ${colors.pinkFooter};
  font-weight: bold;
  fon-size: 12px;
  margin-left: 8px;
`
