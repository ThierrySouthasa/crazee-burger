import styled from 'styled-components/macro';

const Logo = () => {

    return (
        <LogoStyled>
            <h1>Crazee</h1>
            <img src="/logo-orange.png" alt='logo' />
            <h1>Burger</h1>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    height : 10em;
    font-size : 3em;
    font-family: "Amatic SC", cursive;
    color : #F38F00;
    display : flex;
    align-items : center;
    justify-content : space-evenly;
    text-transform : uppercase;

`

export default Logo;
