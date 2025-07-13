import styled from 'styled-components';
// import chocolate from '../img/chocolate1.png';
import MandalaGrid from './MandalaGrid';

const MyProducts = () => {
    return(
     <div>
        <Myh1>PRODUCTS</Myh1>
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

