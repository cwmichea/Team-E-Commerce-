import styled from 'styled-components';
// import chocolate from '../img/chocolate1.png';
import MandalaGrid from './MandalaGrid';
import pageScript from '../Objects/Script';
import { useLanguage } from './LanguageContext'; // Import the language context

const MyProducts = () => {
  const { language } = useLanguage(); // Get current language
  // Multilingual content

  return(
     <div>
        <Myh1>{pageScript[language].product.header}</Myh1>
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

