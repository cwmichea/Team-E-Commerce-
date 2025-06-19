import styled from 'styled-components';

const Footer = () => {
    return(
        <Wrapper>
            <P>
                Footer WIP
            </P>
        </Wrapper>
    )
}
const P = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.palette.primary};
`
const Wrapper = styled.div`
    background-color: darkblue;
    color: white;
    border-style: dashed ;
    border-color: red;
`

export default Footer