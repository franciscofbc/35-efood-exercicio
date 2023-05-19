import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

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
    cursor: pointer;
  }

  > img {
    height: 168px;
    width: 100%;
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1;

  .overlay {
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

export const ModalContent = styled.div`
  display: flex;
  // align-items: center;
  padding: 32px;
  background-color: ${colors.pink};
  position: relative; //por causa da ImgFechar
  z-index: 1;

  @media (max-width: ${breakpoints.desktop}) {
    width: 80%;
  }

  h2 {
    color: ${colors.pinkFooter};
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    color: ${colors.pinkFooter};
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 16px;
    line-height: 24px;
  }

  a {
    color: ${colors.pink};
    background-color: ${colors.pinkFooter};
    text-decoration: none;
    // display: block;
    text-align: center;
    padding: 4px 8px; //mudou
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`
export const FotoCardapio = styled.img`
  height: 280px;
  width: 280px;
  margin-right: 24px;
`

export const ImgFechar = styled.img`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
`
