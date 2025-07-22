import styled from 'styled-components';
import {  Link,  useParams } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import pageScript from '../Objects/Script';


const Nav = () => {
  const { language, toggleLanguage } = useLanguage();
  // Language-specific content

  return (
    <NavContainer>
      <nav>
        <div>
        <Link to="/">{pageScript[language].navContent.home}</Link> |{' '}
        <Link to="/about">{pageScript[language].navContent.about}</Link> |{' '}
        <Link to="/products">{pageScript[language].navContent.products}</Link> |{' '}
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
