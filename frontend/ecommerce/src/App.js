import './App.css';
import styled from 'styled-components';
import chocolate from './img/chocolate1.png'

function App() {
  return (
    <div className="App">
      <h1>CHOCOLATE IS THE BEST THING IN THE FUCKING WORLD!</h1>
      <StyledHeading >deal with that</StyledHeading >
      <Myimg src={chocolate} alt='cutesy chocolate'/>
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