import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    // grid-template-columns: 1fr;
    // width: 80%;
    // margin: 0 auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    // width: 80%;
    // margin: 0 auto;
  }
`
