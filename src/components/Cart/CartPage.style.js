import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const CartSection = styled.section`
  background-color: #fff;
  padding: 2rem 0;
  color: #212529;
`;

export const CartContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const CartLeft = styled.div`
  flex: 2;
`;

export const CartTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

export const CartSubtitle = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 1rem;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #dee2e6;
`;

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`;

export const CartItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CartItemTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  font-weight: bold;
`;

export const CartItemMeta = styled.span`
  font-size: 0.9rem;
  color: #6c757d;
`;

export const RemoveLink = styled.button`
  background: none;
  border: none;
  color: #6c63ff;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 0.5rem;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;

export const CartItemPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #212529;
`;

export const CartRight = styled.div`
  flex: 1;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SummaryTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #6c757d;
  margin: 0;
`;

export const SummaryTotal = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  color: #212529;
`;

export const CheckoutButton = styled.button`
  background-color: #6c63ff;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.2s ease;

  &:hover {
    background-color: #5b54d3;
  }
`;

export const CouponContainer = styled.div`
  margin-top: 1rem;
`;

export const CouponTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const CouponWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CouponInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 0.9rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #6c63ff;
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
  }
`;

export const CouponButton = styled.button`
  background-color: #6c63ff;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #5b54d3;
  }
`;
