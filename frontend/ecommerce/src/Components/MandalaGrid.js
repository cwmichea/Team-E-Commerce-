import React from 'react';
import styled from 'styled-components';
import mandalas from '../data/mandalas.json'; 
import { Link } from 'react-router-dom';
import useClickMessage from '../Objects/Functions';// Kezare: import the custom hook for handling floating cart messages
import Promp from './Promp';
import { useLanguage } from './LanguageContext';
import pageScript from '../Objects/Script';

export default function MandalaGrid() {
  const {
    prompMessage,
    prompPosition,
    prompText,
    showPromp,
    triggerClickMessage,
  } = useClickMessage();// Kezare: destructuring the message state and handler from hook

  const { language } = useLanguage();

  return (
    <>
      <Grid>
        {mandalas.map((item) => {
          const imgSrc = process.env.PUBLIC_URL + item.imgRoute;

          return (
            <Card key={item.productId}>
              <StyledLink to={`/products/${item.productId}`}>
                <Image src={imgSrc} alt={item.name} />
              </StyledLink>

              <Title>{item.name}</Title>
              <Price>${item.price.toFixed(2)}</Price>

              <StyledButtonLink to={`/products/${item.productId}`}>
                {pageScript[language].grid.btn}
              </StyledButtonLink>

              {/* Kezare: handle "+ button" click by showing floating message and adding item to cart */}
              <StyledButtonLink onClick={(e) => triggerClickMessage(e, item)}>
                +
              </StyledButtonLink>
            </Card>
          );
        })}
      </Grid>

      {showPromp && (
        <Promp
          top={prompPosition.top}
          left={prompPosition.left}
          visible={prompMessage}
          text={prompText}
        />
      )}
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  height: 222px;
  border: 1px #457b9d solid;
  border-radius: 0.75rem;
`;

const Title = styled.h3`
  margin: 0.5rem 0 0.25rem;
  font-size: 1.1rem;
`;

const Price = styled.p`
  font-weight: bold;
  color: #2d6a4f;
  margin: 0.2rem 0;
`;
const StyledButtonLink = styled(Link)`
  display: inline-block;
  margin: 0.3rem;
  padding: 0.4rem 0.8rem;
  background: #457b9d;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 0.9rem;
  &:hover {
    background: #1d3557;
  }
`;

const StyledLink = styled(Link)`
  display: block;
`;