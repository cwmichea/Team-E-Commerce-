import styled from 'styled-components';
// import chocolate from '../img/chocolate1.png';
import MandalaGrid from './MandalaGrid';
import { useLanguage } from './LanguageContext'; // Import the language context

const MyProducts = () => {
  const { language } = useLanguage(); // Get current language
  // Multilingual content
  const content = {
    en: {
      header: "Our Mandalas",
    },
    fr: {
      header: "Nos Mandalas",
    },
    es: {
      header: "Nuestros Mandalas",
    }
  };

  return(
     <div>
        <Myh1>{content[language].header}</Myh1>
        {/* <Myimg src={chocolate} alt="Chocolate"/> */}
        <MandalaGrid/>
     </div>
    )
}

const Myh1 = styled.h1`
  text-align: center;
  // font-size: 22;
`

export default MyProducts;

