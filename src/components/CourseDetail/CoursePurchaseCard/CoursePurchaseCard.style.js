import styled from 'styled-components';

export const PurchaseCardWrapper = styled.div`
  width: 320px;
  background-color: #fff;
  color: #212529;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
`;

export const PreviewImage = styled.img`
  width: 100%;
  display: block;
`;

export const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 3rem;
  opacity: 0.9;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #212529;
`;

export const OldPrice = styled.span`
  font-size: 0.9rem;
  color: #6c757d;
  text-decoration: line-through;
`;

export const DiscountText = styled.span`
  font-size: 0.9rem;
  color: #d9534f;
`;

export const TimerText = styled.span`
  font-size: 0.9rem;
  color: #d9534f;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const AddToCartButton = styled.button`
  background-color: #6c63ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  flex: 1;  
  padding: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover {
    background-color: #5b54d3;
  }
`;

export const BuyNowButton = styled.button`
  background-color: #fff;
  color: #6c63ff;
  border: 2px solid #6c63ff;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover {
    background-color: #f0efff;
  }
`;

export const GuaranteeText = styled.p`
  font-size: 0.8rem;
  color: #6c757d;
  margin: 0;
  text-align: center;
  line-height: 1.4;
`;
