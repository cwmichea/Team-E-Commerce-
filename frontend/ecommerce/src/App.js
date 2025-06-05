import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      Chrice Team E-Commerce App
    </div>
  );
}

export default App;
const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.palette.primary};
`;