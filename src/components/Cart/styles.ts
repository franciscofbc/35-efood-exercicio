import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  display: none;
  &.isOpen {
    display: flex;
  }

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
  }
`

export const SideBar = styled.aside`
  position: absolute;
  // top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background-color: ${colors.pink};
  z-index: 1;
  padding-top: 32px;
  display: flex;
  flex-direction: column;

  .totalValue {
    display: flex;
    justify-content: space-between;
    margin: 24px 8px 16px 8px;
  }

  p {
    color: ${colors.pinkFooter};
    font-weight: 700;
    font-size: 14px;
  }

  .emptyCart {
    text-align: center;
  }

  .continueDelivery {
    background-color: ${colors.pinkFooter};
    color: ${colors.pink};
    border: none;
    padding: 4px;
    font-weight: 700;
    font-size: 14px;
    // width: 100%;
    margin: 0 8px 0 8px;
    cursor: pointer;
  }
`

export const Item = styled.div`
  display: flex;
  padding: 8px;
  background-color: ${colors.pinkFooter};
  margin: 0 8px 16px 8px;
  position: relative;

  .imgItem {
    height: 80px;
    width: 80px;
    margin-right: 8px;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;
    color: ${colors.pink};
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: ${colors.pink};
  }

  .imgLixeira {
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
export const Delivery = styled.div`
  padding: 0 8px;

  h3 {
    margin: 32px 0 16px 0;
    font-size: 16px;
    font-weight: 700;
    color: ${colors.pinkFooter};
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      // display: block;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 700;
      color: ${colors.pinkFooter};
    }

    input {
      // width: 100%;
      height: 32px;
      backgroud-color: ${colors.pinkFooter};
      margin-bottom: 8px;
      padding: 8px;
      font-size: 14px;
      font-weight: 700;
      color: ${colors.inputColor};
    }

    .sameLine {
      display: flex;

      div {
        > label {
          display: block;
        }

        > input {
          width: 155px;
          margin-right: 34px;
        }
      }
    }

    .btn {
      // width: 100%;
      height: 24px;
      background-color: ${colors.pinkFooter};
      color: ${colors.pink};
      font-size: 14px;
      font-weight: 700;
      border: none;
      cursor: pointer;
    }

    .continuePayment {
      margin: 16px 0 8px 0;
    }
  }
`
