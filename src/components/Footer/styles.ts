import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.pinkFooter};
  height: 296px;
  margin-top: 72px;
`

export const Content = styled.div`
  text-align: center;
  width: 50%;
  margin: 0 auto;
`

export const Logo = styled.img`
  margin-top: 40px;
`
export const Links = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 32px;
  margin-bottom: 80px;
`

export const LinkLi = styled.li`
  margin-right: 8px;
  font-size: 24px;
  a {
    color: ${colors.pink};
  }
`

export const PFooter = styled.p`
  font-size: 10px;
  color: ${colors.pink};
`
