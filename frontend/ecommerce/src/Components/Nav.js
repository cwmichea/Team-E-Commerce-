import styled from 'styled-components';
import {  Link,  useParams } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
        <nav>
          <Link to="/">Home</Link> |{' '}
          <Link to="/about">About</Link> |{' '}
          <Link to="/products">Products</Link> |{' '}
          {/* <StyledLink to="/user/123">User 123</StyledLink> */}
        </nav>
        </div>
    )
}
// const StyledLink = styled.Link`
//   font-family: ${({ theme }) => theme.fonts.primary};
//   color: ${({ theme }) => theme.palette.primary};
// `
export default Nav