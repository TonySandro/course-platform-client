import React from 'react';
import {
  PurchaseCardWrapper,
  PreviewImage,
  Price,
  DiscountInfo,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton
} from './CoursePurchaseCard.style';

const CoursePurchaseCard = ({ previewImage, price, discountInfo }) => {
  return (
    <PurchaseCardWrapper>
      <PreviewImage src={previewImage} alt="Preview" />

      <Price>R$ {price.toFixed(2)}</Price>
      <DiscountInfo>{discountInfo}</DiscountInfo>

      <ButtonGroup>
        <PrimaryButton>Adicionar ao carrinho</PrimaryButton>
        <SecondaryButton>Comprar agora</SecondaryButton>
      </ButtonGroup>
    </PurchaseCardWrapper>
  );
};

export default CoursePurchaseCard;
