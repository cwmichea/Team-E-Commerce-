import styled from 'styled-components';
import chocolate from './img/chocolate1.png';
import { Link } from 'react-router-dom';

const MyHome = () => {
    return(
     <div>
        <StyledH>HOME HERE</StyledH>
        <p>Home</p>
        
        <Myimg src={chocolate} alt="Chocolate"/>
     </div>
    )
}

const Myimg = styled.img`
  height: 200px;
`
const StyledH = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.palette.primary};
`
export default MyHome;