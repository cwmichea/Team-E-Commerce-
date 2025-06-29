import styled from 'styled-components';
import FooterAccount from './FooterAccount';
import FooterLinks from './FooterLinks';
import FooterSupport from './FooterSupport';
import DarkMode from './FooterDarkMode';
import Country from './FooterCountry';
import Language from './FooterLanguage';

const Footer = () => {
    return(
        <Wrapper>
            <P>
                TúMandas
            </P>
            <div>
                <FooterAccount/>
                <FooterSupport/>
                <FooterLinks/>
            </div>
            <div className='buttons'>
                <Language/>
                <Country/>
                <DarkMode/>
            </div>

        </Wrapper>
    )
}
const P = styled.h1`
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.palette.primary};
`
const Wrapper = styled.div`
    font-size: 10px;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    &>.buttons{
        width: 40vw;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        border: 2px solid grey;
        border-radius: 30px;
        font-size: 15px;
        &>div{
            height: 50px;
            width: 50vw;
            color: white;
            justify-items: center;
        };
    }
    &>div{
        width: 80vw;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        border-top: 2px solid grey;
        font-size: 12px;
        &>div{
            padding-top: 5px;
            height: 150px;
            width: 20vw;
            color: white;
            justify-items: center;
        };
    };
`

export default Footer