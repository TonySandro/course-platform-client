import styled from 'styled-components';

export const PurchaseCardWrapper = styled.div`
  flex: 0 0 320px;
  background-color: #f8f9fa;
  color: #212529;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PreviewImage = styled.img`
  width: 100%;
  border-radius: 6px;
`;

export const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`;

export const DiscountInfo = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PrimaryButton = styled.button`
  background-color: #ff4b4b;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover {
    background-color: #ff1f1f;
  }
`;

export const SecondaryButton = styled.button`
  background-color: #fff;
  color: #ff4b4b;
  border: 1px solid #ff4b4b;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s ease;

  &:hover {
    background-color: #ffe5e5;
  }
`;
