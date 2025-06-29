import styled from 'styled-components';
import chocolate from '../img/chocolate1.png';
import { Link } from 'react-router-dom';

const MyProducts = () => {
    return(
     <div>
        <h1>PRODUCTS</h1>
        <Myimg src={chocolate} alt="Chocolate"/>
     </div>
    )
}

const Myimg = styled.img`
  height: 200px;
`

export default MyProducts;