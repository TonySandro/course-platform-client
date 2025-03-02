import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import {
  PurchaseCardWrapper,
  ImageWrapper,
  PreviewImage,
  PlayIcon,
  PriceContainer,
  Price,
  ButtonGroup,
  AddToCartButton,
  BuyNowButton,
  GuaranteeText
} from './CoursePurchaseCard.style';

const CoursePurchaseCard = ({
  imageUrl = 'https://via.placeholder.com/400x200?text=Golang+Preview',
  newPrice = 28.9,
}) => {
  return (
    <PurchaseCardWrapper>
      <ImageWrapper>
        <PreviewImage src={imageUrl} alt="Course preview" />
        <PlayIcon>
          <FaPlayCircle />
        </PlayIcon>
      </ImageWrapper>

      <PriceContainer>
        <Price>R$ {newPrice.toFixed(2)}</Price>
        {/* <OldPrice>R$ {oldPrice.toFixed(2)}</OldPrice> */}
      </PriceContainer>

      {/* <DiscountText>{discount}</DiscountText>
      <TimerText>{timeDeal}</TimerText> */}

      <ButtonGroup>
        <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
        <BuyNowButton>Comprar agora</BuyNowButton>
      </ButtonGroup>

      <GuaranteeText>
        Garantia de devolução do dinheiro em 30 dias<br />
        Acesso vitalício total
      </GuaranteeText>
    </PurchaseCardWrapper>
  );
};

export default CoursePurchaseCard;
