import React, {useState} from 'react';
import styled from 'styled-components';
import mandalas from '../data/mandalas.json'; 
import { Link } from 'react-router-dom';
import pageScript from '../Objects/Script';
import { useLanguage } from './LanguageContext'; // Import the language context
// const imgContext = require.context('..', false, /\.jpg$/);
const printMe = (log) => {console.log(log);}

export default function MandalaGrid() {
  const [prompMessage, setPrompMessage] = useState(false);
  const [prompPosition, setPrompPosition] = useState({top: 0, left: 0});
  const [prompText, setPrompText] = useState('')
  const [shopCart, setShopCart] = useState(
    {
      product: null,
      quantity: 0,
      cost: 0,
    }
  )

  const { language } = useLanguage(); // Get current language
  // Multilingual content

  const clickMessage = (e, item) => {
    const messageArea = e.target.getBoundingClientRect();
    const toastWidth = 180;
    const padding = 10;

    const fitsRight = messageArea.left + messageArea.width + toastWidth + padding < window.innerWidth;

    const left = fitsRight
      ? messageArea.left + window.scrollX + messageArea.width + padding // right of button
      : messageArea.left + window.scrollX - toastWidth - padding;      // left of button

    const top = messageArea.top + window.scrollY - 40;
    
    const count = 0
    console.log(item.name, item.price, count++ )
    setPrompPosition({ top, left });
    setPrompText(`Added "${item.name}" to cart!`);
    setPrompMessage(true);

    setTimeout(() => setPrompMessage(false), 3000);
  };

  
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
            {pageScript[language].grid.btn} 
          </StyledButtonLink>
          <StyledButtonLink onClick={(e) => clickMessage(e, item)}>
            +
          </StyledButtonLink>
        </Card>
      )} )}
    </Grid>
    {prompMessage && (
    <Promp 
      top={prompPosition.top}
      left={prompPosition.left}
      visible={prompMessage}    
    >
      {prompText}
    </Promp>
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

const Promp = styled.div`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  background-color: #457b9d;
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(-10px)')};
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 1000;
  white-space: nowrap;
`