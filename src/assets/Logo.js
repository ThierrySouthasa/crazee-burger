import styled from 'styled-components/macro';

const Logo = () => {

    return (
        <LogoStyled>
            <h1>Crazee</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt='logo' />
            <h1>Burger</h1>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    height : 30rem;
    font-size : 4.5rem;
    font-family: "Amatic SC", cursive;
    color : #F38F00;
    display : flex;
    align-items : center;
    justify-content : center;
    text-transform : uppercase;

    img {
        height : 2em;
        margin : 0 10px;
    }

`

export default Logo;
