import styled from 'styled-components';
// import chocolate from './img/chocolate1.png';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext'; // Import the language context

const MyAbout = () => {
    const { language } = useLanguage(); // Get current language
  // Multilingual content
  const content = {
    en: {
      header: "About us, Tú Mandas",
    },
    fr: {
      header: " À propos de nous, Tú Mandas",
    },
    es: {
      header: "Acerca de nosotros, ",
    }
  };
    return(
      <div>
        <Myh1>{content[language].header}</Myh1>
        <p>
          Amet non consequat consectetur aliqua. Culpa do mollit velit laborum elit ex incididunt ex magna. Adipisicing ipsum amet exercitation officia esse aliqua veniam et cupidatat reprehenderit exercitation consectetur irure in. Et exercitation in duis exercitation exercitation adipisicing esse consequat reprehenderit ea nulla sint exercitation laboris. Nostrud labore laborum Lorem irure ipsum sit id laboris. Occaecat dolore ex dolor commodo dolore quis sint ea.

          Tempor ad occaecat non sint voluptate enim ad elit nostrud quis. Consequat adipisicing est magna ad velit in minim incididunt ut esse cillum non cupidatat. Irure duis voluptate in nulla quis irure sint sit elit cupidatat cupidatat magna reprehenderit. Deserunt quis qui nulla tempor in incididunt fugiat dolore fugiat adipisicing veniam excepteur. Non irure esse deserunt exercitation veniam cillum do aliqua. Ad incididunt cupidatat eu dolore consectetur do nisi ut elit ut esse.

          Consectetur deserunt mollit irure sit exercitation ullamco nulla nulla aliquip ut et consequat. Ea dolore nulla quis commodo non. Lorem cupidatat pariatur sit duis quis amet anim.

          Cupidatat velit esse cupidatat id non elit. Voluptate do eu Lorem in enim esse. Eu enim irure reprehenderit excepteur magna excepteur sit laboris aliqua et. Lorem sit laborum nisi in velit excepteur eu cillum voluptate commodo reprehenderit aliquip esse aliquip. Dolore sunt consequat mollit eu reprehenderit velit.

          Ad magna consequat cupidatat aliqua eu dolor laborum sunt cillum non. Velit sit culpa nostrud deserunt mollit pariatur sint occaecat tempor sit minim veniam velit. Officia laboris commodo ea quis in pariatur commodo. Cillum voluptate deserunt mollit labore exercitation proident irure duis sint nulla mollit occaecat proident duis.

          Nostrud occaecat culpa exercitation nulla Lorem quis. Cupidatat anim irure voluptate excepteur. Ea et tempor veniam voluptate in est cillum. Ex aliqua exercitation voluptate ipsum. Excepteur eiusmod officia ad reprehenderit incididunt do tempor minim aliqua proident eiusmod sit deserunt consequat. Reprehenderit commodo qui aliqua in. Officia cillum quis deserunt ut cupidatat eiusmod qui pariatur dolor cillum occaecat velit.

          Enim adipisicing incididunt ea labore mollit id cillum minim velit adipisicing cillum eiusmod. Qui anim consequat voluptate sunt. In fugiat nisi cupidatat do exercitation irure dolor deserunt aute ex eiusmod. Minim aliqua dolore exercitation occaecat culpa commodo nisi cillum sint excepteur. Incididunt duis anim velit quis nulla reprehenderit Lorem do incididunt officia sit commodo quis qui. Ea pariatur aute sit eu consequat ad sunt.

          Pariatur do in nostrud aute amet cupidatat ipsum commodo do incididunt. Quis aliqua pariatur sint ad. Ipsum Lorem deserunt et Lorem enim. Sit voluptate ut nisi enim deserunt labore ex sint ut nostrud veniam exercitation velit. Exercitation non occaecat non dolor dolor duis.

          Elit aute est fugiat esse consectetur. Amet in cupidatat aliqua amet ea consequat exercitation ea incididunt tempor id quis proident adipisicing. Cupidatat cillum est aliqua occaecat ullamco velit sunt consectetur ex deserunt aliqua. Occaecat veniam dolor ipsum anim nulla ullamco laborum dolore quis amet aliquip veniam occaecat duis. Anim ea dolore amet dolore laborum in pariatur voluptate elit qui ad irure. Deserunt adipisicing qui sint incididunt cupidatat adipisicing qui incididunt sint pariatur voluptate.

          Occaecat laborum ullamco dolor in non laborum anim id ullamco. In et velit nulla enim quis tempor non ullamco. Voluptate cillum aliqua amet esse voluptate mollit et mollit qui excepteur fugiat mollit voluptate ea. Fugiat excepteur velit ullamco non duis exercitation sint. Eiusmod ipsum consectetur consectetur incididunt enim adipisicing laborum ex et ex in velit sunt incididunt. Lorem aliquip laboris non laboris irure dolore adipisicing.
        </p>
        {/* <Myimg src={chocolate} alt="Chocolate"/> */}
      </div>
    )
}

const Myh1 = styled.h1`
  text-align: center;
`

export default MyAbout;