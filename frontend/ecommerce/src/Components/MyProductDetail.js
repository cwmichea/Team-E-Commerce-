import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import mandalas from '../data/mandalas.json';

const Wrapper = styled.div`
  padding: 40px;
  max-width: 600px;
  margin: auto;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: 500px;
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

export default function MyProductDetail() {
  const { productId } = useParams();
  const product = mandalas.find((p) => p.productId === productId);
//   console.log("productId ", productId);
//   console.log("productId from URL:", productId);
//   console.log("All productIds:", mandalas.map(p => p.productId));

  if (!product) {
    return <Wrapper><h2>Product not found!!</h2></Wrapper>;
  }

  return (
    <Wrapper>
      <Image src={process.env.PUBLIC_URL + product.imgRoute} alt={product.name} />
      <Title>{product.name}</Title>
      <Price>${product.price.toFixed(2)}</Price>
      <DownloadLink href={product.filePdfRoute} target="_blank" rel="noopener noreferrer">
        Download PDF
      </DownloadLink>
    </Wrapper>
  );
}
