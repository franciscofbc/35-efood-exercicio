import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Image = styled.div`
  height: 384px;
  margin-bottom: 80px;
`
export const Container = styled.div`
  text-align: center;
  width: 50%;
  margin: 0 auto;
`
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  color: ${colors.pink};
`
export const Logo = styled.img`
  margin-top: 36px;
  margin-bottom: 136px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 50px;
  }
`
