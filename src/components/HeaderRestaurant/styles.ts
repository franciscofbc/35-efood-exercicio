import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  height: 184px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 64px;

    p {
      font-size: 18px;
      font-weight: 900;
      color: ${colors.pink};
    }
  }
`
export const ImageRestaurant = styled.div`
  height: 280px;
  margin-bottom: 56px;
  background-repeat: no-repeat;
  background-size: cover;

  div {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: space-between;
  }

  p {
    font-size: 32px;
    font-weight: 100;
    color: ${colors.white};
    padding-top: 24px;
  }

  h2 {
    font-size: 32px;
    font-weight: 900;
    color: ${colors.white};
    padding-top: 160px;
  }
`
