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
  // background-size: 100%;
  background-size: cover;
  // display: block;
  background-position: center;

  position: relative;
  .container {
    position: relative;
    z-index: 1;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

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
