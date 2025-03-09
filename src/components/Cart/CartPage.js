import React from 'react';
import {
  CartSection,
  CartContainer,
  CartLeft,
  CartTitle,
  CartSubtitle,
  CartItem,
  CartItemImage,
  CartItemInfo,
  CartItemTitle,
  CartItemMeta,
  RemoveLink,
  CartItemPrice,
  CartRight,
  SummaryTitle,
  SummaryTotal,
  CheckoutButton,
  CouponContainer,
  CouponTitle,
  CouponWrapper,
  CouponInput,
  CouponButton
} from './CartPage.style';

const CartPage = ({cartItems}) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const handleRemove = (itemId) => {
    console.log('Remover item com ID:', itemId);
  };

  const handleApplyCoupon = () => {
    console.log('Aplicar cupom...');
  };

  const handleCheckout = () => {
    console.log('Prosseguir com finalização...');
  };

  return (
    <CartSection>
      <CartContainer>
        <CartLeft>
          <CartTitle>Carrinho de compras</CartTitle>
          <CartSubtitle>{cartItems.length} curso(s) no carrinho</CartSubtitle>

          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <CartItemImage src={item.imageUrl} alt={item.title} />
              <CartItemInfo>
                <CartItemTitle>{item.title}</CartItemTitle>
                {item.meta && <CartItemMeta>{item.meta}</CartItemMeta>}
                <RemoveLink onClick={() => handleRemove(item.id)}>Remover</RemoveLink>
              </CartItemInfo>
              <CartItemPrice>R$ {item.price.toFixed(2)}</CartItemPrice>
            </CartItem>
          ))}
        </CartLeft>

        <CartRight>
          <div>
            <SummaryTitle>Total</SummaryTitle>
            <SummaryTotal>R$ {total.toFixed(2)}</SummaryTotal>
          </div>

          <CheckoutButton onClick={handleCheckout}>
            Prosseguir com finalização
          </CheckoutButton>

          <CouponContainer>
            <CouponTitle>Promoções</CouponTitle>
            <CouponWrapper>
              <CouponInput placeholder="Insira cupom" />
              <CouponButton onClick={handleApplyCoupon}>Aplicar</CouponButton>
            </CouponWrapper>
          </CouponContainer>
        </CartRight>
      </CartContainer>
    </CartSection>
  );
};

export default CartPage;
