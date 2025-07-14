import styled from 'styled-components';
// import chocolate from './img/chocolate1.png';
import { Link } from 'react-router-dom';
import pageScript from '../Objects/Script';
import { useLanguage } from './LanguageContext'; // Import the language context

const MyAbout = () => {
    const { language } = useLanguage(); // Get current language

    return(
      <Wrapper>
        <Myh2>
          {pageScript[language].about.header}
        </Myh2>
        {Object.entries(pageScript[language].about.body).map(([key, value])=>(
            <div  key = {key}>
              <P>{value}</P>
            </div>
        ))}
        <Myh2>
          {pageScript[language].about.missionHeader}
        </Myh2>
        <P>
          {pageScript[language].about.mission}
        </P>
        <P>
          {pageScript[language].about.follow}
          <a
            href = "#"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://instagram.com/tumandalas",
                "popup",
                "width=600,height=600"
              );
            }}
            >
            @tumandalas
          </a>
        </P>
      </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: 50px 300px;
`
const Myh2 = styled.h2`
  text-align: center;
`

const P = styled.p`
  text-align: justify ;
`

export default MyAbout;