import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import mandalas from '../data/mandalas.json';
import pageScript from '../Objects/Script';
import { useLanguage } from './LanguageContext';
import Promp from './Promp';
import useClickMessage from '../Objects/Functions';// Kezare: import the custom hook for handling floating cart messages



export default function MyProductDetail() {
  const { productId } = useParams();
  const product = mandalas.find((p) => p.productId === productId);
  const {language} = useLanguage()

  const {
    prompMessage,
    prompPosition,
    prompText,
    showPromp,
    triggerClickMessage,
  } = useClickMessage();// Kezare: destructuring the message state and handler from hook

  //   console.log("productId ", productId);
//   console.log("productId from URL:", productId);
//   console.log("All productIds:", mandalas.map(p => p.productId));

  if (!product) {
    return <Wrapper><h2>{pageScript[language].product.error}</h2></Wrapper>;
  }

  return (
    <Wrapper>
      <Image src={process.env.PUBLIC_URL + product.imgRoute} alt={product.name} />
      <Title>{product.name}</Title>
      <Price>${product.price.toFixed(2)} Cad</Price>

      <DownloadLink href={product.filePdfRoute} target="_blank" rel="noopener noreferrer">
        {pageScript[language].product.download} PDF
      </DownloadLink>

      <StyledButtonLink to={`/products/`}>
        {pageScript[language].product.goback} 
      </StyledButtonLink>

      {/* Kezare: handle "+ button" click by showing floating message and adding item to cart */}
      <StyledButtonLink onClick={(e) => triggerClickMessage(e, product)}>
        +
      </StyledButtonLink>

      {showPromp && (
        <Promp
          top={prompPosition.top}
          left={prompPosition.left}
          visible={prompMessage}
          text={prompText}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 40px;
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers child elements horizontally */`;

const Image = styled.img`
  max-width: 100%;
  height: 450px;
  border-radius: 1rem;
  object-fit: cover;
`;

const Title = styled.h2`
  margin-top: 1rem;
`;

const Price = styled.p`
  font-weight: bold;
  color: #2d6a4f;
`;

const DownloadLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #457b9d;
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  &:hover {
    background: #1d3557;
  }
`;
const StyledButtonLink = styled(Link)`
//   display: block;
//   max-width: 150px;
  margin-top: 0.5rem;
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