import {useState} from 'react'

import {
  MainContainer,
  CardOne,
  CardOneHeaderCard,
  CardOneHeading,
  CardOneLineBreak,
  CreditCardContainer,
  CardNumber,
  CardHolderHeading,
  CardHolderName,
  CardTwoBgContainer,
  CardTwo,
  CardTwoHeading,
  CardNumberInput,
  UsernameInput,
} from './styledComponents'

const CreditCard = () => {
  const [username, setName] = useState('')
  const [cardNumber, setNumber] = useState('')

  const onChangeUsername = event => setName(event.target.value)

  const onChangeCardNumber = event => setNumber(event.target.value)

  return (
    <MainContainer>
      <CardOne>
        <CardOneHeaderCard>
          <CardOneHeading>CREDIT CARD</CardOneHeading>
          <CardOneLineBreak />
        </CardOneHeaderCard>
        <CreditCardContainer data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardHolderHeading>CARDHOLDER NAME</CardHolderHeading>
          <CardHolderName>{username}</CardHolderName>
        </CreditCardContainer>
      </CardOne>
      <CardTwoBgContainer>
        <CardTwo>
          <CardTwoHeading>Payment Method</CardTwoHeading>
          <CardNumberInput
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <UsernameInput
            type="text"
            placeholder="Cardholder Name"
            value={username}
            onChange={onChangeUsername}
          />
        </CardTwo>
      </CardTwoBgContainer>
    </MainContainer>
  )
}

export default CreditCard
