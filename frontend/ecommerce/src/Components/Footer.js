import styled from 'styled-components';

const Footer = () => {
    return(
        <div>
            <P>
                Footer WIP
            </P>
        </div>
    )
}
const P = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.palette.primary};
`
export default Footer