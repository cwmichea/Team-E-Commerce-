import styled from 'styled-components';
import {  Link,  useParams } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const Nav = () => {
  const { language, toggleLanguage } = useLanguage();
  // Language-specific content
  const navContent = {
    en: {
      home: 'Home',
      about: 'About',
      products: 'Products'
    },
    fr: {
      home: 'Accueil',
      about: 'À propos',
      products: 'Produits'
    },
    es: {
      home: 'Inicio',
      about: 'Sobre',
      products: 'Productos'
    }
  };

  return (
    <NavContainer>
      <nav>
        <div>
        <Link to="/">{navContent[language].home}</Link> |{' '}
        <Link to="/about">{navContent[language].about}</Link> |{' '}
        <Link to="/products">{navContent[language].products}</Link> |{' '}
        </div>
        <LanguageToggle>
          <button onClick={() => toggleLanguage('en')}>EN</button>
          <button onClick={() => toggleLanguage('fr')}>FR</button>
          <button onClick={() => toggleLanguage('es')}>ES</button>
        </LanguageToggle>
      </nav>
    </NavContainer>
  );
};

// Styled components
const NavContainer = styled.div`
  nav {
    padding: 1rem;
    background-color: ${({ theme }) => theme.palette.primary};
    color: white;
    display: flex;
    justify-content: space-between;
  }
  
  a {
    color: white;
    text-decoration: none;
    margin: 0 0.5rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 480px) {
    background-color: ${({ theme }) => theme.palette.secondary};
  }
`;

const LanguageToggle = styled.span`
  margin-left: 2rem;
  
  button {
    background: none;
    border: 1px solid white;
    color: white;
    padding: 0.2rem 0.5rem;
    margin: 0 0.2rem;
    cursor: pointer;
    border-radius: 3px;
    
    &:hover {
      background: rgba(255,255,255,0.2);
    }
    
    &:focus {
      outline: none;
    }
  }
`;

export default Nav;
