import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const CardOne = styled.div`
  height: 65vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3b4b69;
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 50%;
  }
`

export const CardOneHeaderCard = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px 0px 0px;
`

export const CardOneHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 25px;
  text-align: center;
  margin: 0px 0px 0px 0px;
  padding: 20px 10px 7px 10px;
  font-weight: 500;
`

export const CardOneLineBreak = styled.hr`
  width: 100%;
  border: 3px solid #ffd773;
  background-color: #ffd773;
`

export const CreditCardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  border-radius: 10px;
  width: 90%;
  margin: 30px 15px 20px 15px;
  max-width: 400px;
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (min-width: 768px) {
    margin: 200px 15px 20px 15px;
    height: 250px;
  }
`

export const CardNumber = styled.p`
  font-size: 18px;
  color: #ffffff;
  font-weight: 500;
  margin: 0px 0px 0px 0px;
  padding: 10px 0px 30px 20px;
  text-align: left;
  font-family: 'Roboto';
`

export const CardHolderHeading = styled.p`
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 10px 20px;
  text-align: left;
  font-family: 'Roboto';
`

export const CardHolderName = styled.p`
  font-size: 18px;
  color: #ffffff;
  font-weight: 500;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 15px 20px;
  text-align: left;
  font-family: 'Roboto';
`

export const CardTwoBgContainer = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: 50%;
  }
`

export const CardTwo = styled.div`
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const CardTwoHeading = styled.h1`
  font-family: 'Roboto';
  color: #3b4b69;
  margin: 0px 0px 0px 0px;
  padding: 20px 10px 20px 0px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const CardNumberInput = styled.input`
  width: 100%;
  border: 1px solid #c3cad9;
  margin: 0px 0px 10px 0px;
  padding: 12px 0px 15px 12px;
  border-radius: 5px;
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  cursor: pointer;
  outline: none;
`

export const UsernameInput = styled.input`
  width: 100%;
  border: 1px solid #c3cad9;
  padding: 12px 0px 15px 12px;
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`
