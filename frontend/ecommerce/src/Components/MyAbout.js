import styled from 'styled-components';
// import chocolate from './img/chocolate1.png';
import { Link } from 'react-router-dom';
import pageScript from '../Objects/Script';
import { useLanguage } from './LanguageContext'; // Import the language context

const MyAbout = () => {
    const { language } = useLanguage(); // Get current language
  // Multilingual content
  // const content = {
  //   en: {
  //     header: "About us, Tú Mandas",
  //   },
  //   fr: {
  //     header: " À propos de nous, Tú Mandas",
  //   },
  //   es: {
  //     header: "Acerca de nosotros, Tú Mandas",
  //   }
  // };
    return(
      <div>
        <Myh1>{pageScript[language].about.header}</Myh1>
        <p>
        {pageScript[language].about.body}
        </p>
        {/* <Myimg src={chocolate} alt="Chocolate"/> */}
      </div>
    )
}

const Myh1 = styled.h1`
  text-align: center;
`

export default MyAbout;