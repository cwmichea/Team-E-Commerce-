import styled from 'styled-components';
// import chocolate from '../img/chocolate1.png';
import { Link } from 'react-router-dom';

const MyUser = () => {
    return(
     <div>
        <p>User Profile</p>
        {/* <Myimg src={chocolate} alt="Chocolate"/> */}
     </div>
    )
}

const Myimg = styled.img`
  height: 200px;
`

export default MyUser;