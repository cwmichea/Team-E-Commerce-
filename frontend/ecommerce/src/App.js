import './App.css';
import styled from 'styled-components';
import chocolate from './img/chocolate1.png'
import Nav from './Components/Nav';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <h1>CHOCOLATE IS THE BEST THING IN THE FUCKING WORLD!</h1>
      <StyledHeading >deal with that</StyledHeading >
      <Myimg src={chocolate} alt='cutesy chocolate'/>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.palette.primary};
`
const Myimg = styled.img`
  height: 200px;
`
;