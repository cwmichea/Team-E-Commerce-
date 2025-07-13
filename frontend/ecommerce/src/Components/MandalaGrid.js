import React from 'react';
import styled from 'styled-components';
import mandalas from '../data/mandalas.json'; 
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // Import the language context
// const imgContext = require.context('..', false, /\.jpg$/);
const printMe = (log) => {console.log(log);}

export default function MandalaGrid() {
  const { language } = useLanguage(); // Get current language
  // Multilingual content
  const content = {
      en: {
        btn: "Take a look",
      },
      fr: {
        btn: "Voir plus",
      },
      es: {
        btn: "Echa un vistazo",
      }
  }
  
  return (<>
    <Grid>
      {mandalas.map((item) => {
        // const imgSrc = imgContext(`${item.imgRoute}`); 
        const imgSrc = process.env.PUBLIC_URL + item.imgRoute; // ✅ fixed     
        const imgSrc1 = '/chocolate1.png';   
        printMe(item.imgRoute.toString());   
        return (
        <Card key={item.productId}>
          {/* import chocolate from '../img/chocolate1.png'; */}
          <StyledLink to={`/products/${item.productId}`}>
              <Image src={imgSrc} alt={item.name} />
          </StyledLink>
          {/* <Image src={imgSrc} alt={item.name} /> */}
          <Title>{item.name}</Title>
          <Price>${item.price.toFixed(2)}</Price>
          <StyledButtonLink to={`/products/${item.productId}`}>
            {content[language].btn} 
          </StyledButtonLink>
        </Card>
      )} )}
    </Grid></>
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

const StyledLink = styled(Link)`
  display: block;
`;