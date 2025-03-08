import React from 'react';
import { Button } from '../../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.style';

 const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Serviços</PricingHeading>
          <PricingContainer>
          <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Mentoria em Grupo</PricingCardPlan>
                <PricingCardCost>R$130,00</PricingCardCost>
                <PricingCardLength>mensal</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Sessões colaborativas</PricingCardFeature>
                  <PricingCardFeature>Troca de experiências com outros profissionais</PricingCardFeature>
                  <PricingCardFeature>Descontos em cursos e materiais</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Escolher Plano</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Mentoria Individual</PricingCardPlan>
                <PricingCardCost>R$180,00</PricingCardCost>
                <PricingCardLength>mensal</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Acompanhamento personalizado</PricingCardFeature>
                  <PricingCardFeature>Planos de ação sob medida</PricingCardFeature>
                  <PricingCardFeature>Feedback regulares para garantir seu progresso e desenvolvimento</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Escolher Plano</Button>
              </PricingCardInfo>
            </PricingCard>
    
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Pacote Completo</PricingCardPlan>
                <PricingCardCost>R$250,00</PricingCardCost>
                <PricingCardLength>mensal</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Mentoria individual e em grupo</PricingCardFeature>
                  <PricingCardFeature>Acesso a materiais exclusivos</PricingCardFeature>
                  <PricingCardFeature>Sessão de supervisão clínica (para aplicação prática dos conceitos)</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Escolher Plano</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing