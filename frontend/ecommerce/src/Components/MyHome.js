import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // Import the language context

const Home = () => {
  const { language } = useLanguage(); // Get current language

  // Multilingual content
  const content = {
    en: {
      header: "Welcome to Tú Manda, your Mandala World",
      subtitle: "Here, we color your life!",
      peace: "Peace",
      balance: "Balance",
      harmony: "Harmony",
      cta: "Begin Journey"
    },
    fr: {
      header: "Bienvenue à Tú Manda, ton Monde Mandala",
      subtitle: "Ici, on colore ta vie!",
      peace: "Paix",
      balance: "Équilibre",
      harmony: "Harmonie",
      cta: "Commencer le Voyage"
    },
    es: {
      header: "Bienvenido a Tú Manda, tu Mundo Mandala",
      subtitle: "Aquí, coloremaons tu vida!",
      peace: "Paz",
      balance: "Equilibrio",
      harmony: "Armonía",
      cta: "Comenzar el Viaje"
    }
  };

  return (
    <HomeContainer>
      <MandalaHeader>{content[language].header}</MandalaHeader>
      <MandalaSub>{content[language].subtitle}</MandalaSub>
      
      <MandalaGrid>
        <MandalaCircle color="primary">
          <MandalaIcon>☮</MandalaIcon>
          <MandalaTitle>{content[language].peace}</MandalaTitle>
        </MandalaCircle>
        
        <MandalaCircle color="primary">
          <MandalaIcon>♻</MandalaIcon>
          <MandalaTitle>{content[language].balance}</MandalaTitle>
        </MandalaCircle>

        
        <MandalaCircle color="primary">
          <MandalaIcon>∞</MandalaIcon>
          <MandalaTitle>{content[language].harmony}</MandalaTitle>
        </MandalaCircle>
      </MandalaGrid>
      
      <MandalaButton to="/about">
        {content[language].cta}
      </MandalaButton>
    </HomeContainer>
  );
};

// All your existing styled components remain exactly the same
const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background};
  background: ${({ theme }) => `
    linear-gradient(
      0deg,
      // white 0%,
      ${theme.palette.primary} 10%,
      white 100%
    )
  `};
`;

const MandalaHeader = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.palette.primary};
  margin-bottom: 3rem;
  font-size: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;
const MandalaSub= styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.palette.primary};
  margin-bottom: 2rem;
  font-size: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const MandalaGrid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const MandalaCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, color }) => theme.palette[color]};
  color: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
  
  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

const MandalaIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const MandalaTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: 0;
  font-size: 1.2rem;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const MandalaButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: ${({ theme }) => theme.palette.primary};
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.1rem;
  margin-top: 2rem;
  transition: background-color 0.3s ease;
  font-size: 1.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary};
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
`;

export default Home;