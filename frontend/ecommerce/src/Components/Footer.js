import styled from 'styled-components';

const Footer = () => {
    return(
        <div>
            <p>
                Footer WIP
            </p>
        </div>
    )
}
const StyledH = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.palette.primary};
`
export default Footer