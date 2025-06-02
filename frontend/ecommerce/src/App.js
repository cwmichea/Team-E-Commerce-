import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledHeading>Just A test 4 check Global Styles + Stylecomponents!</StyledHeading>
        <p>
          Hola Cesar, q tal? este es el inicio del ecommerce!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.palette.primary};
`;