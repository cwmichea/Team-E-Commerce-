import styled from 'styled-components';
import chocolate from '../img/chocolate1.png';
import { Link } from 'react-router-dom';

const MyHome = () => {
    return(
     <div>
        <StyledH>HOME HERE</StyledH>
        <p>
          Non enim mollit velit dolore enim ut magna anim excepteur. Aliqua mollit tempor sint officia nostrud consectetur nisi non proident proident adipisicing laborum nisi. Officia ad eiusmod non veniam officia adipisicing cupidatat reprehenderit. Veniam minim occaecat elit minim sunt voluptate.

          Elit ullamco aute eiusmod incididunt ullamco nulla sint officia qui. Veniam cupidatat officia nulla cupidatat reprehenderit reprehenderit dolore et sunt. Ea ut voluptate cupidatat esse amet. Enim commodo irure velit exercitation aute dolore sunt eu. Voluptate proident officia ad sint do aute qui reprehenderit aliquip ea enim pariatur do dolore. Dolor consequat ea minim tempor sint amet.

          Reprehenderit cupidatat cupidatat ipsum do. Mollit magna culpa amet eiusmod. Veniam amet ipsum ea nulla duis ad ipsum qui sit dolore ut. Eu ea ex consectetur et nulla officia magna aliquip minim. Quis tempor amet irure dolore proident et enim voluptate Lorem pariatur consequat velit.

          Cupidatat et sit consequat est commodo adipisicing est reprehenderit. In nostrud ex eiusmod ad. Aliquip esse eiusmod deserunt pariatur anim id fugiat sit pariatur. Adipisicing elit reprehenderit enim mollit aliquip Lorem minim sint deserunt ad anim sunt. Consequat dolor cillum cupidatat veniam cupidatat et ullamco ipsum. Qui adipisicing ipsum sunt dolore ad. Voluptate exercitation proident pariatur in reprehenderit do cillum deserunt anim sit irure pariatur anim.

          Ad elit esse ea cupidatat sint eiusmod. Excepteur nisi cillum est magna ut anim ut aliquip. Laborum mollit dolor reprehenderit consectetur proident. Id est nulla cupidatat sunt. Excepteur anim ullamco Lorem amet ad incididunt enim. Qui eiusmod laboris Lorem velit id aute id non deserunt tempor ea sit non quis.
        </p>
        
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